import React, {useState} from 'react';
import axios from 'axios';
import Display from './Display';
import Header from './Header';

export default function App() {
  const key = '6R5HBX57Y8JPDSASLYV6HZW35';
  const [cityName, setCityName] = useState("");
  const [temperature, setTemperature] = useState("--");
  const [conditions, setConditions] = useState("--");
  const [tempMax, setTempMax] = useState("--");
  const [tempMin, setTempMin] = useState("--");
  const [location, setLocation] = useState("--");
  const [feelsLike, setFeelsLike] = useState("--");
  const [precipTypes, setPrecipTypes] = useState([]);
  const [precipProb, setPrecipProb] = useState("--");
  const [precip, setPrecip] = useState("--");
  const [humidity, setHumidity] = useState("--");
  const [days, setDays] = useState(["hello","bvye","testing"]);

  function getLocation() {
    setCityName(document.getElementById("city-name").value);
  }

  function getData() {
    axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=${key}`)
    .then(res => {
      console.log(res.data);
      setTemperature(fahrenheitToCelsius(res.data.currentConditions.temp));
      setConditions(res.data.currentConditions.conditions);
      setTempMax(fahrenheitToCelsius(Math.max(res.data.currentConditions.temp, res.data.days[0].tempmax)));
      setTempMin(fahrenheitToCelsius(Math.min(res.data.currentConditions.temp, res.data.days[0].tempmin)));
      setLocation(res.data.resolvedAddress);
      setFeelsLike(fahrenheitToCelsius(res.data.currentConditions.feelslike));
      setPrecipTypes(res.data.days[0].preciptype);
      setPrecipProb(res.data.days[0].precipprob);
      setPrecip(Math.round(res.data.days[0].precip * 25.4 * 100)/100);
      setHumidity(res.data.currentConditions.humidity);
      setDays(res.data.days);
    }).catch(err => {
      console.log(err);
      alert("Invalid Entry");
    })
  }

  return (
    <div>
      <Header/>
      <div id="submission-container">
        <input onChange={getLocation} id="city-name" placeholder="Enter City, State(Optional), Country(Optional)" autoComplete="off"></input>
        <button onClick={getData}>Set Location</button>
      </div>
      <Display
        location = {location}
        temperature = {temperature}
        conditions = {conditions}
        tempMax = {tempMax}
        tempMin = {tempMin}
        feelsLike = {feelsLike}
        precipTypes = {precipTypes}
        precipProb = {precipProb}
        precip = {precip}
        humidity = {humidity}
        days = {days}

        />
    </div>
  )
}

//HELPER FUNCTIONS
function fahrenheitToCelsius(fahrenheit) {
  return Math.round((fahrenheit - 32) * (5/9))
}

export {fahrenheitToCelsius}