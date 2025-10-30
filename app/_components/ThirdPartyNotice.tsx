"use client";

import { useEffect, useState } from "react";

export default function ThirdPartyNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem("third_party_notice_dismissed");
      if (!dismissed) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[9998]">
      <div className="mx-auto max-w-7xl px-4 pb-4">
        <div className="rounded-md bg-black/70 text-white text-xs md:text-sm px-3 py-2 flex items-center justify-between gap-3">
          <p className="opacity-90">
            We may share limited usage info with third parties (e.g. Meta) to improve our services.
          </p>
          <button
            className="shrink-0 inline-flex items-center rounded-sm bg-white/10 hover:bg-white/20 px-2 py-1"
            onClick={() => {
              try { localStorage.setItem("third_party_notice_dismissed", "1"); } catch {}
              setVisible(false);
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}


