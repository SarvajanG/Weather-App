import React from 'react'

export default function Display(props) {
  return (
    <div id="display">
        <header>{props.cityName}</header>
        <div id="grid-container">
            <div className="grid-item" id="temperature">
              <p>{props.temperature}°C</p>
            </div>
            <div className="grid-item" id="conditions">
              <p>{props.conditions}</p>
              <p>H:{props.tempMax}° L:{props.tempMin}°</p>
            </div>
            <div className="grid-item">3</div>
            <div className="grid-item">4</div>
        </div>
    </div>
  )
}
