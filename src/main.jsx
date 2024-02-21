import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import i18n from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";
import es from "@assets/i18n/es/es.js";
import en from "@assets/i18n/en/en.js";

i18n.use(initReactI18next).init({
  lng: "es",
  fallbackLng: ["es", "en"],
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
);
