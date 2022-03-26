import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './popup.css'
import { AirData, fetchAirData, fetchCities } from '../utils/api'
import { calculateAQI } from '../utils/calculator'

const App: React.FC<{}> = () => {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState<AirData>()

  useEffect(() => {
    (async function getData(query: string) {
      const cities = await fetchCities(query);
      const city = cities[0];
      const data = await fetchAirData(city);
      setData(data);
      setLoad(false);
      return data;
    })("Kitchener");
  }, [])

  if (!load) {
    console.log(data);
    console.log(calculateAQI(data));
  }
  return (
    <div>
      <img src="icon.png" />
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
