import React, { useState, useEffect, FormEvent } from 'react';
import ReactDOM from 'react-dom';
import './popup.css';
import { ArrayOfCities } from '../utils/api';
import { SearchSection } from '../components/searchSection';
import { HomeSection } from '../components/homeSection';

const App: React.FC<{}> = () => {
  const [cities, setCities] = useState<ArrayOfCities>([]);

  useEffect(() => {
    chrome.storage.local.get(['cities'], (response) => {
      let savedCities = response.cities ?? [];
      setCities(savedCities);
    });
  }, []);

  const changeTab = (event: any) => {
    const home = document.getElementById('home');
    const search = document.getElementById('search');
    const clickedHome = event.target.id === 'home-tab';

    if (clickedHome) {
      home.classList.remove('hidden');
      search.classList.add('hidden');
    } else {
      home.classList.add('hidden');
      search.classList.remove('hidden');
    }
  };

  return (
    <>
      <ul>
        <li id="home-tab" onClick={changeTab}>
          Home
        </li>
        <li id="search-tab" onClick={changeTab}>
          Search
        </li>
      </ul>
      <div className="content">
        <div id="home">
          <HomeSection cities={cities} citiesHook={setCities} />
        </div>
        <div id="search" className="hidden">
          <SearchSection citiesHook={setCities} />
        </div>
      </div>
    </>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
