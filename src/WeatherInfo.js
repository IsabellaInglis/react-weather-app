import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

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
        <div className="row test">
          <div className="col-6">
            <img src={props.data.icon} alt={props.data.description} />
            <WeatherTemperature celsius={props.data.temperature} />
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
