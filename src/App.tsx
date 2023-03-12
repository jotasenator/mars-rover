import "./App.css";
import { RenderPhoto } from "./components/RenderPhoto";
import { Speech } from "./components/Speech";
import { Title } from "./components/Title";

import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation("global");
  return (
    <div className="App">
      <Speech />
      <Title title={t("title.p8")} />
      <RenderPhoto />
    </div>
  );
}

export default App;
