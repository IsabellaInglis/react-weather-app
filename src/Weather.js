import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather-container">
      <h1>London</h1>
      17ºC Humidity: 79% Wind: 10mph
      <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/IsabellaInglis">Isabella Inglis</a>,
        open-sourced on Github and hosted on Netlify
      </footer>
    </div>
  );
}
