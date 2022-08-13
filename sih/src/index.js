import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { BrowserRouter } from "react-router-dom";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: ["cookie"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locals/{{lng}}/translation.json",
    },
  });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
