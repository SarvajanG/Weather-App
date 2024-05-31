import React, {useState} from 'react';
import axios from 'axios';
import Display from './Display';
import Header from './Header';

export default function App() {
  const key = '6R5HBX57Y8JPDSASLYV6HZW35';
  const [cityName, setCityName] = useState("");

  function getWeather() {
    setCityName(document.getElementById("city-name").value);
  }

  function getData() {
    axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=${key}`)
    .then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div>
      <Header/>
      <div id="submission-container">
        <input onChange={getWeather} id="city-name" placeholder="Enter City"></input>
        <button onClick={getData}>Set Location</button>
      </div>
      <Display
        cityName = {cityName}
        temperature = "62"
        conditions = "sunny"
        tempMax = "9"
        tempMin = "0"
        />
    </div>
  )
}