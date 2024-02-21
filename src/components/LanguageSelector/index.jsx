import { useTranslation } from "react-i18next";
import ESImage from "@assets/flags/es.png";
import ENImage from "@assets/flags/en.png";
import { useState } from "react";

const LANGUAGES = ["en", "es"];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const handleChange = () => {
    const newLang = lang === LANGUAGES[0] ? LANGUAGES[1] : LANGUAGES[0];
    i18n.changeLanguage(newLang).then(() => {
      setLang(newLang);
    });
  };

  return (
    <img
      onClick={handleChange}
      className="w-8 h-8 cursor-pointer rounded-full"
      src={lang === "es" ? ESImage : ENImage}
      alt={lang.toUpperCase()}
    />
  );
}
