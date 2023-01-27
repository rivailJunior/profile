import { useRouter } from "next/router";
import { getTranslation } from "../helper/i18n-helper";

export default function useTranslate() {
  const router = useRouter();
  const { locale } = router;

  /*TODO: inspect this function*/
  const changeLanguage = async (language: string) => {
    await router.push("/", "/", { locale: language });
  };

  const isBR = locale === "pt";

  return { t: getTranslation(locale), changeLanguage, isBR };
}
