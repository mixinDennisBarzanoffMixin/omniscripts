"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function generateEventId(): string {
  // Lightweight UUID-ish
  return (Date.now().toString(36) + Math.random().toString(36).slice(2, 10)).toUpperCase();
}

export default function MetaEventsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const event_id = generateEventId();
    const event_source_url = window.location.href;

    // Fire-and-forget ViewContent
    fetch("/api/conversions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event_name: "ViewContent", event_id, event_source_url }),
      keepalive: true,
    }).catch(() => {});
  }, [pathname, searchParams]);

  return null;
}


