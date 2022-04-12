import "./App.css";
import Decrease from "./components/Decrease";
import Increase from "./components/Increase";
function App() {
  return (
    <div className="App">
      <Increase title="Increase By One" value={1} />
      <Increase title="Increase By 5" value={5} />
      <Increase title="Increase By 100" value={100} />
      <Decrease title="Decrease By One" value={1} />
      <Decrease title="Decrease By 10" value={10} />
      <Decrease title="Decrease By 100" value={100} />
      {/* <button onClick={() => setCounter(counter + 5)}>Increase By 5</button>
      <button onClick={() => setCounter(counter + 100)}>Increase By 100</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease By One</button>
      <button onClick={() => setCounter(counter - 10)}>Decrease By 10</button>
      <button onClick={() => setCounter(counter - 25)}>Decrease By 25</button> */}
    </div>
  );
}

export default App;
