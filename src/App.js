import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/IsabellaInglis">Isabella Inglis</a>,
        open-sourced on{" "}
        <a href="https://github.com/IsabellaInglis/react-weather-app">Github</a>{" "}
        and hosted on{" "}
        <a href="https://react-application-weather-forecast.netlify.app/">
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
