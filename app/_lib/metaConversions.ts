import crypto from "crypto";

type SendMetaEventArgs = {
  eventName: "ViewContent" | "Contact" | "Schedule" | string;
  eventSourceUrl: string;
  clientUserAgent?: string;
  clientIpAddress?: string;
  email?: string | null;
  countryCode2?: string | null;
  eventId?: string;
  eventTime?: number;
  testEventCode?: string;
};

function sha256Hex(input: string): string {
  return crypto.createHash("sha256").update(input.trim().toLowerCase(), "utf8").digest("hex");
}

function normalizeCountry(code?: string | null): string | null {
  if (!code) return null;
  const c = code.trim();
  if (c.length !== 2) return null;
  return c.toLowerCase();
}

export async function sendMetaEvent({
  eventName,
  eventSourceUrl,
  clientUserAgent,
  clientIpAddress,
  email,
  countryCode2,
  eventId,
  eventTime,
  testEventCode,
}: SendMetaEventArgs): Promise<{ ok: boolean; status: number; body?: unknown; error?: string }> {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_TOKEN;
  const apiVersion = process.env.META_CAPI_API_VERSION || "v19.0";

  if (!pixelId || !accessToken) {
    return { ok: false, status: 500, error: "META_PIXEL_ID or META_CAPI_TOKEN missing" };
  }

  const userData: Record<string, unknown> = {};

  if (clientUserAgent) userData.client_user_agent = clientUserAgent;
  if (clientIpAddress) userData.client_ip_address = clientIpAddress;

  if (email) {
    const hashed = sha256Hex(email);
    userData.em = [hashed];
  }

  const normCountry = normalizeCountry(countryCode2);
  if (normCountry) {
    // Hash country as recommended by Meta for user_data PII
    userData.country = sha256Hex(normCountry);
  }

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: eventTime || Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: eventSourceUrl,
        event_id: eventId,
        user_data: userData,
      },
    ],
    test_event_code: testEventCode || undefined,
  };

  const url = `https://graph.facebook.com/${apiVersion}/${pixelId}/events?access_token=${accessToken}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // keepalive helps during page unload fetches
      keepalive: true,
    });

    const text = await res.text();
    let body: unknown;
    try { body = JSON.parse(text); } catch { body = text; }

    return { ok: res.ok, status: res.status, body, error: res.ok ? undefined : String(body) };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return { ok: false, status: 500, error: msg };
  }
}


