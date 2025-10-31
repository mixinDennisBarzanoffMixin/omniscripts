"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/app/_i18n/I18nProvider";

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
  const { t } = useI18n();

  return (
    <div className="fixed bottom-0 inset-x-0 z-[9998]">
      <div className="mx-auto max-w-7xl px-4 pb-4">
        <div className="rounded-md bg-black/70 text-white text-xs md:text-sm px-3 py-2 flex items-center justify-between gap-3">
          <p className="opacity-90">{t('banner.notice') as string}</p>
          <button
            className="shrink-0 inline-flex items-center rounded-sm bg-white/10 hover:bg-white/20 px-2 py-1"
            onClick={() => {
              try { localStorage.setItem("third_party_notice_dismissed", "1"); } catch {}
              setVisible(false);
            }}
          >
            {t('common.ok') as string}
          </button>
        </div>
      </div>
    </div>
  );
}


