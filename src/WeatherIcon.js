import React from "./react";

export default function WeatherIcon(props) {
  return (
    <div>
      <img src={props.data.icon} alt={props.data.description} />
    </div>
  );
}
