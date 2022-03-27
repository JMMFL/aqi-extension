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
  // const [status, setStatus] = useStat("loading");
  const [cities, setCities] = useState<ArrayOfCities>([]);
  const [data, setData] = useState<AirData>();
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function getData(query: string) {
      const cities = await fetchCities(query);
      setCities(cities);
      return cities;
    }

    getData(query);
  }, [query]);

  const submitQuery = (event: FormEvent) => {
    const query = event.target['city-search'].value;
    setQuery(query);
    event.preventDefault();
  };

  const submitCity = (event: FormEvent) => {
    console.log(event);
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={submitQuery}>
        <label htmlFor="city-search">City Search</label>
        <input id="city-search" type="search" name="city-search" required />
      </form>
      <form onSubmit={submitCity}>
        {(cities as any).map((city: City) => (
          <button>{`${city.name}, ${city.country}, ${city.state}`}</button>
        ))}
      </form>
    </>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
