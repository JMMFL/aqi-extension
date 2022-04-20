import React, { useEffect, useState } from 'react';
import { fetchAirData, AirData, City } from '../../utils/api';
import { calculateAQI } from '../../utils/calculator';
import { MdRemoveCircle } from 'react-icons/md';
import {
  Button,
  Component,
  Components,
  Concentration,
  FlexBox,
  Flag,
  Name,
  Particle,
  NameRow,
  DataRow,
  Grade,
  Skeletons,
  Long,
  Short,
  State,
} from './styled';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import { createLabel, Category } from '../../utils/labeller';

function CityCard({ cities, city, citiesHook }) {
  const [data, setData] = useState<AirData>();

  useEffect(() => {
    async function getAirData(city: City) {
      const data = await fetchAirData(city);
      setData(data);
      return data;
    }

    getAirData(city);
  }, [cities]);

  const removeCity = () => {
    chrome.storage.local.get(['cities'], ({ cities }) => {
      const { id } = city;
      const filtered = cities.filter((city: City) => city.id !== id);
      chrome.storage.local.set({ cities: filtered });
      citiesHook(filtered);
    });
  };

  if (data) {
    const { grade, background, color } = createLabel(data.main.aqi as Category);
    const { o3, pm2_5, pm10 } = calculateAQI(data);
    const labels = ['o3', 'pm2.5', 'pm10'];

    return (
      <FlexBox>
        <NameRow>
          <Flag>{getUnicodeFlagIcon(city.country)}</Flag>
          <Name>{city.name}</Name>
          <State>{city.state ?? ''}</State>
        </NameRow>
        <DataRow>
          <Components>
            <Grade background={background} color={color}>
              {grade}
            </Grade>
            {[o3, pm2_5, pm10].map((component, index) => {
              if (component > -1) {
                return (
                  <Component>
                    <Concentration>{component}</Concentration>
                    <Particle>{labels[index]}</Particle>
                  </Component>
                );
              }
            })}
          </Components>
          <Button onClick={removeCity}>
            <MdRemoveCircle />
          </Button>
        </DataRow>
      </FlexBox>
    );
  } else {
    return (
      <Skeletons>
        <Short></Short>
        <Long></Long>
      </Skeletons>
    );
  }
}

export { CityCard };
