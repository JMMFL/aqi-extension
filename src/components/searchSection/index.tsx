import React, { useState, useEffect, FormEvent } from 'react';
import { SearchResult } from '../searchResult';
import { SearchBar } from '../searchBar';
import { ArrayOfCities, City } from '../../utils/api';
import { fetchCities } from '../../utils/api';
import { Container } from './styled';

function SearchSection({ citiesHook }) {
  const [results, setResults] = useState<ArrayOfCities>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function getCities(query: string) {
      const results = await fetchCities(query);
      setResults(results);
      return results;
    }

    if (query !== '') getCities(query);
  }, [query]);

  const submitQuery = (event: FormEvent) => {
    const query = event.target['city-search'].value;
    setQuery(query);
    event.preventDefault();
  };

  return (
    <Container id="search-section" className="hidden">
      <SearchBar onSearch={submitQuery} />
      {(results as any).map((city: City) => (
        <SearchResult city={city} citiesHook={citiesHook} />
      ))}
    </Container>
  );
}

export { SearchSection };
