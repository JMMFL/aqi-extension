import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <form onSubmit={onSearch}>
      <label htmlFor="city-search">City Search</label>
      <input
        id="city-search"
        type="search"
        name="city-search"
        autoComplete="off"
        required
      />
    </form>
  );
}

export { SearchBar };
