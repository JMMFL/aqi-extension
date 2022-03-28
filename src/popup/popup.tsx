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
import { SearchSection } from '../sections/SearchSection';

const App: React.FC<{}> = () => {
  const [city, setCity] = useState<City>();
  const [data, setData] = useState<AirData>();

  useEffect(() => {
    async function getAirData(city: City) {
      const data = await fetchAirData(city);
      setData(data);
      return data;
    }

    getAirData(city);
  }, [city]);

  return <SearchSection />;
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
