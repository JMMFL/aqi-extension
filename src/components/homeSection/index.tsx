import React from 'react';
import { CityCard } from '../cityCard';
import { City } from '../../utils/api';

function HomeSection({ cities, citiesHook }) {
  return (
    <div id="home-section">
      {(cities as any).map((city: City) => (
        <CityCard city={city} citiesHook={citiesHook} />
      ))}
    </div>
  );
}

export { HomeSection };
