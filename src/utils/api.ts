const OPEN_WEATHER_API_KEY: string = '757946128f459261b0f030d6e88792db';

interface City {
  name: string;
  state: string;
  country: string;
  lat: number;
  lon: number;
}

interface ArrayOfCities {
  [index: number]: City;
}

interface AirData {
  components: {
    co: number;
    no: number;
    no2: number;
    o3: number;
    pm2_5: number;
    pm10: number;
    so2: number;
  };

  dt: number;
  main: {
    aqi: number;
  };
}

async function fetchAirData(city: City): Promise<AirData> {
  const { lat, lon } = city;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`
  );

  if (!response.ok) throw Error(`Oops. Something went wrong. Try again.`);

  const json = await response.json();
  const data = await json.list[0];
  return data;
}

async function fetchCities(city: string): Promise<ArrayOfCities> {
  const queryLimit = 5;
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${queryLimit}&appid=${OPEN_WEATHER_API_KEY}`
  );

  if (!response.ok) throw Error(`Could not find ${city}. Check spelling.`);

  const data: ArrayOfCities = await response.json();
  return data;
}

export { City, AirData, ArrayOfCities, fetchAirData, fetchCities };
