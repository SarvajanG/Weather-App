import React, {useState} from 'react';
import axios from 'axios';
import Display from './Display';
import Header from './Header';

export default function App() {
  //All useState variables
  const key = '6R5HBX57Y8JPDSASLYV6HZW35';
  const [cityName, setCityName] = useState("");
  const [temperature, setTemperature] = useState(32);
  const [conditions, setConditions] = useState("--");
  const [tempMax, setTempMax] = useState(32);
  const [tempMin, setTempMin] = useState(32);
  const [location, setLocation] = useState("--");
  const [feelsLike, setFeelsLike] = useState(32);
  const [precipTypes, setPrecipTypes] = useState([""]);
  const [precipProb, setPrecipProb] = useState("--");
  const [precip, setPrecip] = useState("--");
  const [humidity, setHumidity] = useState("--");
  const [days, setDays] = useState([]);

  //Function gets the input value from the user and stores it into the cityName variable
  function getLocation() {
    setCityName(document.getElementById("city-name").value);
  }

  //Function calls the getData function when Enter is pressed
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      getData();
    }
  }

  //Function calls the Visual Crossing API to get the weather data then assigns the data to the required variables. 
  //Sends an alert to the user if the input given by the user is incorrect.
  function getData() {
    axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=${key}`)
    .then(res => {
      console.log(res.data);
      setTemperature(res.data.currentConditions.temp);
      setConditions(res.data.currentConditions.conditions);
      setTempMax(Math.max(res.data.currentConditions.temp, res.data.days[0].tempmax));
      setTempMin(Math.min(res.data.currentConditions.temp, res.data.days[0].tempmin));
      setLocation(res.data.resolvedAddress);
      setFeelsLike(res.data.currentConditions.feelslike);
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

  //The html that is returned to index.js
  return (
    <div>
      <Header/>
      <div id="submission-container">
        <input onChange={getLocation} onKeyDown={handleKeyDown} id="city-name" placeholder="Enter City, State(Optional), Country(Optional)" autoComplete="off"></input>
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
