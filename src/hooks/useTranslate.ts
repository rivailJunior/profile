"use client"
import { useRouter } from "next/navigation";
// import { getTranslation } from "../helper/i18n-helper";

export default function useTranslate(locale: string) {
  const router = useRouter();
  // const { locale } = router;

  /*TODO: inspect this function*/
  const changeLanguage = async (language: string) => {
    await router.push("/", "/", { locale: language });
  };

  const isBR = locale === "pt";

  return { changeLanguage, isBR };
}
