import "./App.css";
import { RenderPhoto } from "./components/RenderPhoto";
import { Speech } from "./components/Speech";
import { Title } from "./components/Title";

function App() {
  return (
    <div className="App">
      <Speech />
      <Title title="Photos from planet Mars" />
      <RenderPhoto />
    </div>
  );
}

export default App;
