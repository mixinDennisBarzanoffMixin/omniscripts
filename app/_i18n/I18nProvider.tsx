"use client";

import React, { createContext, useContext, useMemo } from "react";
import type { Dictionary, Lang } from "./getDictionary";

type I18nContextType = {
  lang: Lang;
  t: (path: string) => string | string[];
  dict: Dictionary;
};

const I18nContext = createContext<I18nContextType | null>(null);

function getFromPath(dict: any, path: string): any {
  return path.split(".").reduce((acc: any, key: string) => (acc ? acc[key] : undefined), dict);
}

export function I18nProvider({ lang, dict, children }: { lang: Lang; dict: Dictionary; children: React.ReactNode }) {
  const value = useMemo<I18nContextType>(() => ({
    lang,
    dict,
    t: (path: string) => {
      const val = getFromPath(dict, path);
      return val ?? path;
    },
  }), [lang, dict]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextType {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}


