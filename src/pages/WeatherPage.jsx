import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../app/weatherSlice';

const WeatherPage = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const weather = useSelector((state) => state.weather.weather);
  const status = useSelector((state) => state.weather.status);
  const error = useSelector((state) => state.weather.error);

  const handleFetchWeather = () => {
    if (city.trim() !== '') {
      dispatch(fetchWeather(city));
    }
  };

  return (
    <div className='flex flex-col m-10 items-start gap-3'>
      <h1 className='text-2xl'>Check Weather</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter City Name "
        className='border-1 p-1 bg-gray-100'
      />
      <button onClick={handleFetchWeather} className='border-2 border-black p-1 rounded-md bg-gray-100'>Get Weather</button>

      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && weather && (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp}° C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
