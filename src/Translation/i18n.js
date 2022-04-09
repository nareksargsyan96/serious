import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import en from "./en";
import rus from "./rus";
import hy from "./hy";

const resources = {
  en: {
    translation: {
      ...en,
    },
  },
  rus: {
    translation: {
      ...rus,
    },
  },
  hy: {
    translation: {
      ...hy,
    },
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
