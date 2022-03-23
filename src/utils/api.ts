const OPEN_WEATHER_API_KEY: string = '757946128f459261b0f030d6e88792db';

interface OpenWeatherCity {
  name: string;
  state: string;
  country: string;
  lat: number;
  lon: number;
}

interface OpenWeatherCities {
  [index: number]: OpenWeatherCity;
}

async function fetchAQI(city: OpenWeatherCity): Promise<any> {
  const { lat, lon } = city;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`
  );

  if (!response.ok) throw Error(`Oops. Something went wrong. Try again.`);

  const json = await response.json();
  const concentrations = await json.list[0];
  return aqi;
}

async function fetchCities(city: string): Promise<OpenWeatherCities> {
  const queryLimit = 5;
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${queryLimit}&appid=${OPEN_WEATHER_API_KEY}`
  );

  if (!response.ok) throw Error(`Could not find ${city}. Check spelling.`);

  const data: OpenWeatherCities = await response.json();
  return data;
}

export { OpenWeatherCity, OpenWeatherCities, fetchAQI, fetchCities };
