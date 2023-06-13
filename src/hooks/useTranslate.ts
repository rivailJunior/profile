export default function useTranslate(locale: string) {

  const isBR = locale === "pt";

  return { isBR };
}
