import React from 'react';
import { CityCard } from '../cityCard';
import { City } from '../../utils/api';

function HomeSection({ cities, citiesHook }) {
  return (
    <>
      {(cities as any).map((city: City) => (
        <CityCard city={city} citiesHook={citiesHook} />
      ))}
    </>
  );
}

export { HomeSection };
