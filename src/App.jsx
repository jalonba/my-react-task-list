import Header from "./components/Header";
import Body from "./components/Body";
import Tareas from "./components/Tareas";

function App() {
  return (
    <Body>
      <Header />
      <div>
        <Tareas />
      </div>
    </Body>
  );
}

export default App;
