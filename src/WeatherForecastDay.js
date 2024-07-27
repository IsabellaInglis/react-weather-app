import React from "react";

export default function WeatherForecastDay(props) {
  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[date.getDay()];
  }

  function formatIcon(iconData, iconDescription) {
    let icon = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${iconData}.png`;
    return <img src={icon} alt={iconDescription} />;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{formatDay(props.data.time)}</div>
      <div>
        {formatIcon(
          props.data.condition.icon,
          props.data.condition.description
        )}
      </div>

      <div className="forecast-temperature">
        <span className="forecast-temperature-max">
          {Math.round(props.data.temperature.maximum)}º
        </span>{" "}
        <span className="forecast-temperature-min">
          {Math.round(props.data.temperature.minimum)}º
        </span>
      </div>
    </div>
  );
}
