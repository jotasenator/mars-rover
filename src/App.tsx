import "./App.css";
import { RenderPhoto } from "./components/RenderPhoto";
import { Speech } from "./components/Speech";
import { Title } from "./components/Title";

import { useTranslation } from "react-i18next";
import { CustomI18nButton } from "./components/buttons/CustomI18nButton";
import { RefreshButton } from "./components/buttons/RefreshButton";
import { Footer } from "./components/Footer";

function App() {
  const { t } = useTranslation("global");
  return (
    <div className="App">
      {/* 🇺🇸 &#127482;&#127480; */}
      <CustomI18nButton
        flagIcon={<i>🇺🇸</i>}
        iso639_1={"en"}
        customClass={"flag"}
      />
      {/* 🇵🇹 &#127477;&#127481; */}
      <CustomI18nButton
        flagIcon={<i>🇵🇹</i>}
        iso639_1={"pt"}
        customClass={"flag"}
      />
      {/* 🇪🇸 &#127466;&#127480; */}
      <CustomI18nButton
        flagIcon={<i>🇪🇸</i>}
        iso639_1={"es"}
        customClass={"flag"}
      />
      <Speech />
      <div className="title-refresh-button">
        <Title title={t("title.p8")} />
        <RefreshButton
          showMsg={t("refreshButton.p13")}
          reloadMsg={t("refreshButton.p14")}
        />
      </div>
      <RenderPhoto />
      <Footer />
    </div>
  );
}

export default App;
