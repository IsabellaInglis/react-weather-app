import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        className="form-control"
        autoFocus="on"
      />
      <input type="submit" value="Search" className="btn btn-primary" />
    </form>
  );

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      city: response.data.city,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const apiKey = "dc6760cf7088c245e5a42a646bco203t";
    let city = "London";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.loaded) {
    return (
      <div className="Weather">
        {form}
        <hr />
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Tuesday, 10:00</li>
          <li className="text-capitalize">{weatherData.description}</li>
          <div className="row">
            <div className="col-6">
              <img src={weatherData.icon} alt={weatherData.description} />
              <span className="temperature-value">
                {weatherData.temperature}
              </span>
              <span className="temperature-unit">ºC</span>
            </div>
            <div className="col-6">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} mph</li>
            </div>
          </div>
        </ul>
      </div>
    );
  } else {
    return <div className="Weather">{form}</div>;
  }
}
