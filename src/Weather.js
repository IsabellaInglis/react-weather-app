import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather-container">
      <h1>London</h1>
      17ºC Humidity: 79% Wind: 10mph
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        alt="weather-icon"
      />
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
