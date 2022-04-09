import React, { useEffect, useState } from 'react';
import { fetchAirData, City, AirData } from '../../utils/api';
import { calculateAQI } from '../../utils/calculator';

function CityCard({ city, citiesHook }) {
  const [data, setData] = useState<AirData>();

  useEffect(() => {
    async function getAirData(city: City) {
      const data = await fetchAirData(city);
      setData(data);
      return data;
    }

    getAirData(city);
  }, []);

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

  if (data) {
    const category = data.main.aqi;
    const { o3, pm2_5, pm10 } = calculateAQI(data);

    return (
      <div>
        <h1>{city.name}</h1>
        <h2>Index: {category}</h2>
        <ul>
          <li>o3: {o3}</li>
          <li>pm2_5: {pm2_5}</li>
          <li>pm10: {pm10}</li>
        </ul>
        <button onClick={removeCity}>Remove</button>
      </div>
    );
  } else {
    return <h1>Not yet</h1>;
  }
}

export { CityCard };
