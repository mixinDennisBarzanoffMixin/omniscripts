import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendMetaEvent } from "@/app/_lib/metaConversions";
import { getCountryCodeFromIp } from "@/app/_lib/ipCountry";

const bodySchema = z.object({
  event_name: z.string(),
  event_source_url: z.string().url().optional(),
  email: z.string().email().optional(),
  event_id: z.string().optional(),
  event_time: z.number().int().optional(),
});

function getClientIp(req: NextRequest): string | null {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || null;
  // @ts-ignore - not typed on NextRequest
  const ip = (req as any).ip as string | undefined;
  return ip || null;
}

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const parsed = bodySchema.parse(json);

    const ua = request.headers.get("user-agent") || undefined;
    const ip = getClientIp(request);
    const url = parsed.event_source_url || request.nextUrl.href;

    // Country only for events that require it (Contact), harmless otherwise
    const countryCode = await getCountryCodeFromIp(ip);

    // Allow test mode via query param ?test=1
    const testEventCode = request.nextUrl.searchParams.get("test") ? (process.env.META_CAPI_TEST_EVENT_CODE || undefined) : undefined;

    // Per user request: Schedule -> only UA; Contact -> email + country; ViewContent -> UA
    const eventName = parsed.event_name;
    const includeEmail = eventName.toLowerCase() === "contact" ? parsed.email : undefined;
    const includeCountry = eventName.toLowerCase() === "contact" ? countryCode : null;

    const res = await sendMetaEvent({
      eventName,
      eventSourceUrl: url,
      clientUserAgent: ua,
      clientIpAddress: ip || undefined,
      email: includeEmail,
      countryCode2: includeCountry,
      eventId: parsed.event_id,
      eventTime: parsed.event_time,
      testEventCode,
    });

    return NextResponse.json({ ok: res.ok, status: res.status, meta: res.body, error: res.error }, { status: res.ok ? 200 : 502 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Invalid request";
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}


