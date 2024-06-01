import React from 'react'

export default function Display(props) {
  return (
    <div id="display">
        <header id="location">{props.location}</header>
        <div id="grid-container">
            <div className="grid-item" id="grid-item-1">
              <p id="temperature">{props.temperature}°C</p>
              <p id="feels-like">Feels like: {props.feelsLike}°C</p>
            </div>
            <div className="grid-item" id="grid-item-2">
              <p>{props.conditions}</p>
              <p>H:{props.tempMax}°C L:{props.tempMin}°C</p>
            </div>
            <div className="grid-item" id="grid-item-3">
              <p id="precipitation">Precipitation</p>
              <div id="precip-types">Type{props.precipTypes.length > 1 ? "s": ""}: {props.precipTypes.map((item,index) => {
                return (
                  <p key={index}>{item}{index < props.precipTypes.length - 1 ? ',' : ''}</p>
                );
              })}</div>
              <p>Chance: {props.precipProb}%</p>
              <p>Amount: {props.precip}mm</p>
              <p>Humidity: {props.humidity}%</p>
            </div>
            <div className="grid-item">4</div>
        </div>
    </div>
  )
}
