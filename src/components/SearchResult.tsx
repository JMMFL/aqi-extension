import React from 'react';

function SearchResult({ city }) {
  const saveCity = () => {
    console.log(city);
  };

  return (
    <div>
      <h1>{city.name}</h1>
      <h2>{city.country}</h2>
      <h3>{city.state ?? ''}</h3>
      <button onClick={saveCity}>Add Me</button>
    </div>
  );
}

export { SearchResult };
