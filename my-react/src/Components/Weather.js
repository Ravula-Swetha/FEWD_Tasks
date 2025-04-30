import React, { useEffect, useState } from "react";
import axios from "axios";
import './Weather.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=${API_KEY}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [API_KEY]);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Weather Information</h2>
      {weatherData ? (
        <>
          <p>City: {weatherData.name}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Condition: {weatherData.weather[0].description}</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
