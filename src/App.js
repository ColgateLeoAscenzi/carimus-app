import './App.css';
import TestComponent from "./components/TestComponent/TestComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent name = {"Leo"}></TestComponent>
      </header>
    </div>
  );
}

export default App;
