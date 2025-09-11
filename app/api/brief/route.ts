import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendBriefProject } from "@/app/_lib/sendBriefProject";

const briefSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  description: z.string().min(1),
});

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const parsed = briefSchema.parse(json);

    await sendBriefProject(parsed);

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
    }
    return NextResponse.json({ ok: false, error: "Unknown error" }, { status: 500 });
  }
}


