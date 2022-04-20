import React from 'react';
import { Form, Label, Search } from './styled';

function SearchBar({ onSearch }) {
  return (
    <Form onSubmit={onSearch}>
      <Label htmlFor="city-search">City Search</Label>
      <Search
        id="city-search"
        type="search"
        name="city-search"
        autoComplete="off"
        placeholder="e.g. Tokyo"
        required
      />
    </Form>
  );
}

export { SearchBar };
