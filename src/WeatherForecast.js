import React, { useState } from "react";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setLoaded(true);

    setForecast(response.data.daily);
  }

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[date.getDay()];
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="forecast-day">{formatDay(forecast[0].time)}</div>
            <img src={props.data.icon} alt={props.data.description} />
            <div className="forecast-temperature">
              <span className="forecast-temperature-max">
                {Math.round(forecast[0].temperature.maximum)}º
              </span>{" "}
              <span className="forecast-temperature-min">
                {Math.round(forecast[0].temperature.minimum)}º
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "dc6760cf7088c245e5a42a646bco203t";
    let city = props.data.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
}
