import i18next from "i18next";
import global_es from "../translations/es/global.json";
import global_en from "../translations/en/global.json";
import global_pt from "../translations/pt/global.json";

describe("i18next.init", () => {
  test("should initialize i18next with the correct options and resources", () => {
    const initSpy = jest.spyOn(i18next, "init");
    const options = {
      interpolation: { escapeValue: false },
      lng: "en",
      resources: {
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
    };

    i18next.init(options);

    expect(initSpy).toHaveBeenCalledWith(options);
    expect(i18next.isInitialized).toBe(true);
  });
});
