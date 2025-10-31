import en from "./en.json";
import de from "./de.json";

export type Lang = "en" | "de";
export type Dictionary = typeof en;

export async function getDictionary(lang: Lang): Promise<Dictionary> {
  return lang === "de" ? de : en;
}


