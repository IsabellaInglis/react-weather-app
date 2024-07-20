import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter a city..."
          className="form-control"
          autoFocus="on"
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
      <hr />
      <h1>London</h1>
      <ul>
        <li>Tuesday, 10:00</li>
        <li>Mostly cloudy</li>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weather-icon"
            />
            <span className="temperature-value">17</span>
            <span className="temperature-unit">ºC</span>
          </div>
          <div className="col-6">
            <li>Humidity: 79%</li>
            <li>Wind: 10mph</li>
          </div>
        </div>
      </ul>
    </div>
  );
}
