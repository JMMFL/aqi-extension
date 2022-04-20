import React, { useState } from 'react';
import { MdAddCircle, MdCheckCircle } from 'react-icons/md';
import { Button, Card, Flag, Name, State } from './styled';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

function SearchResult({ city, citiesHook }) {
  const [show, setShow] = useState(true);
  city.id = `(${city.lat}, ${city.lon})`;

  chrome.storage.local.get(['cities'], ({ cities }) => {
    const saved = cities ?? [];
    const ids = saved.map((city: any) => city.id);
    const isSaved = ids.includes(city.id);
    setShow(!isSaved);
  });

  const saveCity = () => {
    chrome.storage.local.get(['cities'], ({ cities }) => {
      const saved = cities ?? [];
      saved.push(city);
      chrome.storage.local.set({ cities: saved });
      citiesHook(saved);

      const homeSection = document.getElementById('home-section');
      const homeTab = document.getElementById('home-tab');
      const searchSection = document.getElementById('search-section');
      const searchTab = document.getElementById('search-tab');

      homeSection.classList.toggle('hidden');
      homeTab.classList.toggle('inactive');
      searchSection.classList.toggle('hidden');
      searchTab.classList.toggle('inactive');
    });
  };

  return (
    <Card>
      <Flag>{getUnicodeFlagIcon(city.country)}</Flag>
      <Name>{city.name}</Name>
      <State>{city.state ?? ''}</State>
      {show ? (
        <Button onClick={saveCity} color="green" cursor="pointer">
          <MdAddCircle />
        </Button>
      ) : (
        <Button color="blue" cursor="default">
          <MdCheckCircle />
        </Button>
      )}
    </Card>
  );
}

export { SearchResult };
