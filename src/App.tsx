import "./App.css";
import { RenderPhoto } from "./components/RenderPhoto";
import { Speech } from "./components/Speech";
import { Title } from "./components/Title";

import { useTranslation } from "react-i18next";
import { CustomButton } from "./components/buttons/CustomButton";

function App() {
  const { t } = useTranslation("global");
  return (
    <div className="App">
      {/* 🇺🇸 &#127482;&#127480; */}
      <CustomButton flagIcon={<i>🇺🇸</i>} iso639_1={"en"} customClass={"flag"} />
      {/* 🇵🇹 &#127477;&#127481; */}
      <CustomButton flagIcon={<i>🇵🇹</i>} iso639_1={"pt"} customClass={"flag"} />
      {/* 🇪🇸 &#127466;&#127480; */}
      <CustomButton flagIcon={<i>🇪🇸</i>} iso639_1={"es"} customClass={"flag"} />
      <Speech />
      <Title title={t("title.p8")} />
      <RenderPhoto />
    </div>
  );
}

export default App;
