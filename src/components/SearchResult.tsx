import React from 'react';

function SearchResult({ city, citiesHook }) {
  const saveCity = () => {
    chrome.storage.local.get(['cities'], (response) => {
      const cities = response.cities ?? [];
      cities.push(city);
      chrome.storage.local.set({ cities });
      citiesHook(cities);
    });
  };

  return (
    <div>
      <h1>{city.name}</h1>
      <h2>{city.country}</h2>
      <h3>{city.state ?? ''}</h3>
      <button onClick={saveCity}>Add Me</button>
    </div>
  );
}

export { SearchResult };
