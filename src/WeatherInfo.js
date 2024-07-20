import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <hr />
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
        <div className="row">
          <div className="col-6">
            <img src={props.data.icon} alt={props.data.description} />
            <span className="temperature-value">{props.data.temperature}</span>
            <span className="temperature-unit">ºC</span>
          </div>
          <div className="col-6">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} mph</li>
          </div>
        </div>
      </ul>
    </div>
  );
}
