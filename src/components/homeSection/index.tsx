import React from 'react';
import { CityCard } from '../cityCard';
import { City } from '../../utils/api';
import { Container } from './styled';

function HomeSection({ cities, citiesHook }) {
  return (
    <Container id="home-section">
      {(cities as any).map((city: City) => (
        <CityCard cities={cities} city={city} citiesHook={citiesHook} />
      ))}
    </Container>
  );
}

export { HomeSection };
