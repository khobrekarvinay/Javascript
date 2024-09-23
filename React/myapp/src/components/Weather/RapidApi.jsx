import React, { useState } from 'react';
import axios from 'axios';
import './RapidApi.css';

function WeatherApp() {
  const [city, setCity] = useState("");
	const [weather, setWeather] = useState(null);
	const [current, setCurrent] = useState(null);
	const [location, setLocation] = useState(null);
	const [forecast, setForecast] = useState(null);
	const [errormsg, setErrormsg] = useState("");
	const [loading, setLoading] = useState(false); // To handle any errors

  // Function to fetch weather data
  const fetchWeather = async (city) => {
    const options = {
      method: "GET",
			url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
			params: {
				q: city,
				days: "3",
			},
			headers: {
				"x-rapidapi-key": "068b589f6bmshaada0ea1175ad12p1a68b0jsncc7fec8f49a3",
				"x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      }
    };

    try {
      try {
        const response = await axios.request(options);
        // console.log(response.data);
        setWeather(response.data);
        setCurrent(response.data.current);
        setLocation(response.data.location);
        setForecast(response.data.forecast);
      } catch (error) {
        console.error(error.message);
        setErrormsg(error.message);
      } finally {
        setLoading(false);
      }
      setCity("");
    } catch (error) {
      setErrormsg('Could not fetch weather data');
      setLoading(false);
    }
  };

  // Handle form submission
  

  return (
    <div className="weather-app">
			<h1>Weather App</h1>
			<div className="weather-app-input">
				<input
					type="text"
					placeholder="enter city"
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
				<button onClick={() => fetchWeather(city)}>Enter</button>
			</div>

			{loading && <p className="loader">weather is loading...........</p>}

			{errormsg && <p className="errordisplay">{errormsg}</p>}

			{weather && current && location && forecast && !errormsg ? (
				<>
					<h1>Country:{location.country}</h1>
					<h2>City:{location.name}</h2>
					<div className="current-weather">
						<p>Temperature : {current.temp_c}°C</p>
						<p>Feels like: {current.feelslike_c}°C</p>
						<p>Max-temp: {forecast.forecastday[0].day.maxtemp_c}°C</p>
						<p>Humidity: {current.humidity}</p>
						<div className="image">
							<img src={current.condition.icon} />
							<p>{current.condition.text}</p>
						</div>
					</div>
					<h2>Forecast of the Day</h2>
					<div className="forecast-of-day">
						{forecast.forecastday[0].hour.map((fore) => (
							<div className="forecast-container">
								<div className="left">
									<p>Time: {fore.time.slice(11)}</p>
								</div>
								<div className="right">
									<p>Temperature: {fore.temp_c}°C</p>
								</div>
							</div>
						))}
					</div>
				</>
			) : (
				<>
					<p className="displayer">Enter a city to get the weather details!</p>
				</>
			)}
		</div>
  );
}

export default WeatherApp;
