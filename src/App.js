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
        <a
          href="https://github.com/IsabellaInglis"
          target="_blank"
          rel="noreferrer"
        >
          Isabella Inglis
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/IsabellaInglis/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://react-application-weather-forecast.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
