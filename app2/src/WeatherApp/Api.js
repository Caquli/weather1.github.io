import axios from 'axios';

const apiKey = '7923f4089b92466680fbbb19d9f808ec'; // Replace with your actual Weatherbit API key;

const getWeatherData = (city) => {
  const apiUrl = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;
  const apiUrl1 = `https://api.weatherbit.io/v2.0/current/airquality?city=${city}&key=${apiKey}`;
  return axios.get(apiUrl, apiUrl1);
};

export default getWeatherData;

