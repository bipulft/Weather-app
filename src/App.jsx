import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

{/* api var with key and base*/}
const api = {
  key : "02ed1cfe1ca87fb903870c9c641a01e5",
  base : "https://api.openweathermap.org/data/2.5/",
};

function App() {
  {/* Use state for search and weather */}
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  {/* fetch api data when search is pressed */}
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
    });
  };

  return (
    <div className='container'>
      <h1>Weather App</h1>
      {/* Location search box */}
      <div>
      <input type='text' placeholder='Search...' onChange={(e) => setSearch(e.target.value)}/>

      <button onClick={searchPressed}>Search</button>
      </div>
      
      {/* If weather is not undefined */}
      {typeof weather.main != "undefined" ? (
        <div className='weather-container'>
        {/* Location */}
        <p>{weather.name}</p>
        {/* Temperature in Celsius */}
        <p>{weather.main.temp} °C</p>
        {/* Weather Condition */}
        <p>{weather.weather[0].main}</p>
        <p>{weather.weather[0].description}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App
