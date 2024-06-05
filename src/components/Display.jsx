import React from 'react'
import { fahrenheitToCelsius } from './App';

export default function Display(props) {
  const dayNames = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
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
              {props.precipTypes != null ? <div id="precip-types">Type{props.precipTypes.length > 1 ? "s": ""}: {props.precipTypes.map((item,index) => {
                return (
                  <p key={index}>{item}{index < props.precipTypes.length - 1 ? ',' : ''}</p>
                );
              })}
              </div> : <p>Type: None</p>}
              <p>Chance: {props.precipProb}%</p>
              <p>Amount: {props.precip}mm</p>
              <p>Humidity: {props.humidity}%</p>
            </div>
            <div className="grid-item" id="grid-item-4">
              {props.days.slice(0,7).map((item,index) => {
                const d = new Date(item.datetime);
                return (
                  <div key={index} className='future-forecast'>
                    <p>{dayNames[d.getDay()]}</p>
                    <p>{item.conditions}</p>
                    <p>H: {fahrenheitToCelsius(item.tempmax)}°C</p>
                    <p>L: {fahrenheitToCelsius(item.tempmin)}°C</p>
                  </div>
                );
              })}
            </div>
        </div>
    </div>
  )
}
