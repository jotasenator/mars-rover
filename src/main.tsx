import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import global_pt from "./translations/pt/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    //iso 639-1
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
    pt: {
      global: global_pt,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
