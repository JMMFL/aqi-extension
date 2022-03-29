import React from 'react';
import { CityCard } from '../components/CityCard';
import { City } from '../utils/api';

function HomeSection({ cities, citiesHook }) {
  return (
    <>
      {(cities as any).map((city: City) => (
        <CityCard city={city} citiesHook={citiesHook} />
      ))}
    </>
  );

  // const [city, setCity] = useState<City>();
  // const [data, setData] = useState<AirData>();

  // useEffect(() => {
  //   async function getAirData(city: City) {
  //     const data = await fetchAirData(city);
  //     setData(data);
  //     return data;
  //   }

  //   getAirData(city);
  // }, [city]);
}

export { HomeSection };
