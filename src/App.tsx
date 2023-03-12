import "./App.css";
import { RenderPhoto } from "./components/RenderPhoto";
import { Speech } from "./components/Speech";
import { Title } from "./components/Title";

import { useTranslation } from "react-i18next";
import { CustomI18nButton } from "./components/buttons/CustomI18nButton";
import { RefreshButton } from "./components/buttons/RefreshButton";

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
      <div>
        <Speech />
        <RefreshButton buttonText="Refresh" />
      </div>
      <Title title={t("title.p8")} />
      <RenderPhoto />
    </div>
  );
}

export default App;
