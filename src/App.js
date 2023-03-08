import './App.css';
import Weather from "./Weather"

function App() {
  return (
    <div className="App">
      <Weather />
      <div className="coded-by">
        This project was coded by Kristen Namigai🧝🏻‍♀️and is{" "}
        <a href="https://github.com/KrisTenFour/weather-react" target="_blank" rel="noreferrer">open-sourced on GitHub</a>.
      </div>
    </div>
  );
}

export default App;
