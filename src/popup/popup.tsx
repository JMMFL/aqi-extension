import React, { useState, useEffect, FormEvent } from 'react';
import ReactDOM from 'react-dom';
import './popup.css';
import {
  AirData,
  ArrayOfCities,
  City,
  fetchAirData,
  fetchCities,
} from '../utils/api';
import { calculateAQI } from '../utils/calculator';

const App: React.FC<{}> = () => {
  const [city, setCity] = useState<City>();
  const [cities, setCities] = useState<ArrayOfCities>([]);
  const [data, setData] = useState<AirData>();
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function getCities(query: string) {
      const cities = await fetchCities(query);
      setCities(cities);
      return cities;
    }

    getCities(query);
  }, [query]);

  useEffect(() => {
    async function getAirData(city: City) {
      const data = await fetchAirData(city);
      setData(data);
      return data;
    }

    getAirData(city);
  }, [city]);

  const submitQuery = (event: FormEvent) => {
    const query = event.target['city-search'].value;
    setQuery(query);
    event.preventDefault();
  };

  if (data) {
    console.log(data.components);
    const aqis = calculateAQI(data);
    const { o3, pm2_5, pm10 } = aqis;

    return (
      <>
        <h1>{`Ozone: ${o3}`}</h1>
        <h1>{`PM2.5: ${pm2_5}`}</h1>
        <h1>{`PM10: ${pm10}`}</h1>
      </>
    );
  }

  return (
    <>
      <form onSubmit={submitQuery}>
        <label htmlFor="city-search">City Search</label>
        <input id="city-search" type="search" name="city-search" required />
      </form>
      {(cities as any).map((city: City) => (
        <button
          onClick={() => setCity(city)}
        >{`${city.name}, ${city.country}, ${city.state}`}</button>
      ))}
    </>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
