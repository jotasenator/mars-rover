import "./App.css";
import { RenderPhoto } from "./components/RenderPhoto";
import { Speech } from "./components/Speech";
import { Title } from "./components/Title";

function App() {
  return (
    <div className="App">
      <Speech />
      <Title title="...hope they enjoy the stay :) " />
      <RenderPhoto />
    </div>
  );
}

export default App;
