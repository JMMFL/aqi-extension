import React from 'react';

function CityCard({ city, citiesHook }) {
  const removeCity = () => {
    chrome.storage.local.get(['cities'], ({ cities }) => {
      const { lat, lon } = city;

      let index = 0;
      for (const city of cities) {
        if (lat === city.lat && lon === city.lon) break;
        index++;
      }

      cities.splice(index, 1);
      chrome.storage.local.set({ cities });
      citiesHook(cities);
    });
  };

  return (
    <>
      <div>
        <h1>{city.name}</h1>
        <button onClick={removeCity}>Remove</button>
      </div>
    </>
  );
}

export { CityCard };
