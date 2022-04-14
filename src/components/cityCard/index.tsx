import React, { useEffect, useState } from 'react';
import { fetchAirData, City, AirData } from '../../utils/api';
import { calculateAQI } from '../../utils/calculator';
import { MdRemoveCircle } from 'react-icons/md';
import {
  Button,
  Category,
  Component,
  Components,
  Concentration,
  Container,
  Flag,
  Name,
  Particle,
} from './styled';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

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
    const labels = ['o3', 'pm2.5', 'pm10'];

    return (
      <Container>
        <Flag>{getUnicodeFlagIcon(city.country)}</Flag>
        <Name>{city.name}</Name>
        <Category>{category}</Category>
        <Components>
          {[o3, pm2_5, pm10].map((component, index) => {
            return (
              <Component>
                <Concentration>{component}</Concentration>
                <Particle>{labels[index]}</Particle>
              </Component>
            );
          })}
        </Components>
        <Button onClick={removeCity}>
          <MdRemoveCircle />
        </Button>
      </Container>
    );
  } else {
    return <h1>Not yet</h1>;
  }
}

export { CityCard };
