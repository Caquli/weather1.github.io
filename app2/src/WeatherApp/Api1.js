// App.js
import React, { useState, useCallback } from 'react';
import getWeatherData from '../WeatherApp//Api.js';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Api1.css';

const WeatherApp = () => {
  const [city, setCity] = useState(''); // Default city
  const [weatherData, setWeatherData] = useState(null);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchData = useCallback(() => {
    getWeatherData(city)
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [city]);

  return (
    <div>
      <div className='textfield'>
      <h1 style={{ fontSize: "70px" }}>WeatherX</h1>
      <TextField
        label="City"
        variant="outlined"
        style={{ width: "310px" }}
        value={city}
        onChange={handleCityChange}
      />

      <Button variant="contained" color="primary" onClick={fetchData} style={{ width: "100px", height: "46px"}}>
        Get Weather
      </Button>
      </div>

      {weatherData && (
        <div className='tempinfo'>
          <p>Temperature in {city}: {weatherData.data[0].temp}C</p>
          <p>Description: {weatherData.data[0].weather.description}</p>
          <p>Air Quality: {weatherData.data[0].aqi} AQI</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;

