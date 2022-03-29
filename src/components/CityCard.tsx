import React from 'react';

function CityCard({ city, citiesHook }) {
  const removeCity = () => {
    // chrome.storage.local.get(['cities'], (response) => {
    //   const cities = response.cities ?? [];
    //   console.log(cities);
    //   const index = cities.indexOf(city);
    //   cities.splice(index, 1);
    //   chrome.storage.local.set({ cities });
    //   citiesHook(cities);
    // });
  };

  return (
    <>
      <div>
        <h1>{city.name}</h1>
        {/* <button onClick={removeCity}>Remove</button> */}
      </div>
    </>
  );
}

export { CityCard };
