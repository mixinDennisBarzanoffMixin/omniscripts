export async function getCountryCodeFromIp(ip?: string | null): Promise<string | null> {
  if (!ip) return null;

  // Strip port if present
  const cleanIp = ip.split(":")[0].trim();
  if (!cleanIp) return null;

  // Prefer ipwho.is (no key). Fallback to ipapi.co
  try {
    const res = await fetch(`https://ipwho.is/${encodeURIComponent(cleanIp)}`);
    if (res.ok) {
      const data = await res.json();
      if (data && data.success !== false && typeof data.country_code === "string") {
        return data.country_code as string;
      }
    }
  } catch {}

  try {
    const res2 = await fetch(`https://ipapi.co/${encodeURIComponent(cleanIp)}/country/`);
    if (res2.ok) {
      const text = (await res2.text()).trim();
      if (text && text.length === 2) return text;
    }
  } catch {}

  return null;
}


