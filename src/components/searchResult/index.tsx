import React from 'react';
import { MdAddCircle } from 'react-icons/md';
import { Button, Card, Flag, Name, State } from './styled';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

function SearchResult({ city, citiesHook }) {
  const saveCity = () => {
    chrome.storage.local.get(['cities'], ({ cities }) => {
      const saved = cities ?? [];
      city.id = `(${city.lat}, ${city.lon})`;
      saved.push(city);
      chrome.storage.local.set({ cities: saved });
      citiesHook(saved);
    });
  };

  return (
    <Card>
      <Flag>{getUnicodeFlagIcon(city.country)}</Flag>
      <Name>{city.name}</Name>
      <State>{city.state ?? ''}</State>
      <Button onClick={saveCity}>
        <MdAddCircle />
      </Button>
    </Card>
  );
}

export { SearchResult };
