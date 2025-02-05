import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(null);

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        className="form-control"
        autoFocus="on"
        onChange={handleCityChange}
      />
      <input type="submit" value="Search" className="btn btn-primary" />
    </form>
  );

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "dc6760cf7088c245e5a42a646bco203t";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.loaded) {
    return (
      <div className="Weather">
        {form}
        <WeatherInfo data={weatherData} />
        <WeatherForecast data={weatherData} city={weatherData.city} />
      </div>
    );
  } else {
    return <div className="Weather">{form}</div>;
  }
}
