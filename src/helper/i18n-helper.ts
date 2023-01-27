import enTrans from "../assets/locales/en/translation.json";
import ptTrans from "../assets/locales/pt/translation.json";

const getTranslation = (locale = "pt") => {
  return locale === "pt" ? ptTrans : enTrans;
};

export { getTranslation };
