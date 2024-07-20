import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function changeToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function changeToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature-value">{props.celsius}</span>
        <span className="temperature-unit">
          <span>ºC</span> |{" "}
          <a href="/" className="fahrenheit" onClick={changeToFahrenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="WeatherTemperature">
        <span className="temperature-value">{fahrenheit}</span>
        <span className="temperature-unit">
          <a href="/" onClick={changeToCelsius}>
            ºC
          </a>{" "}
          | <span className="fahrenheit">ºF</span>
        </span>
      </div>
    );
  }
}
