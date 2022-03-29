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
import { HomeSection } from '../sections/HomeSection';

const App: React.FC<{}> = () => {
  const [cities, setCities] = useState<ArrayOfCities>([]);

  useEffect(() => {
    chrome.storage.local.get(['cities'], (response) => {
      let savedCities = response.cities ?? [];
      setCities(savedCities);
    });
  }, []);

  return (
    <>
      <SearchSection citiesHook={setCities} />
      <HomeSection cities={cities} citiesHook={setCities} />
    </>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
