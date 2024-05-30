import React, {useState} from 'react';
import axios from 'axios';
import Submission from './Submission';
import Display from './Display';
import Header from './Header';

export default function App() {
  const key = '6R5HBX57Y8JPDSASLYV6HZW35';
  const city = 'vancouver';

  function getWeather() {
    axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=`)
    .then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div>
      <Header></Header>
      <div id="submission-container">
        <Submission></Submission>
        <button onClick={getWeather}>Set Location</button>
      </div>
      <Display></Display>
    </div>
  )
}
