import React, { useState, useEffect, FormEvent } from 'react';
import ReactDOM from 'react-dom';
import './popup.css';
import { ArrayOfCities } from '../utils/api';
import { SearchSection } from '../components/searchSection';
import { HomeSection } from '../components/homeSection';
import { Tabs } from '../components/tabs';

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
      <Tabs />
      <HomeSection cities={cities} citiesHook={setCities} />
      <SearchSection citiesHook={setCities} />
    </>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
