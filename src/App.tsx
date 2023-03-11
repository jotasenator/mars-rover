import "./App.css";
import { RenderPhoto } from "./components/RenderPhoto";
import { Title } from "./components/Title";

function App() {
  return (
    <div className="App">
      <Title title="Photos from planet Mars" />
      <RenderPhoto />
    </div>
  );
}

export default App;
