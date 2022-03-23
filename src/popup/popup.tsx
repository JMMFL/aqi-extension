import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './popup.css'
import { fetchAQI, fetchCities } from '../utils/api'
import { OZONE, PM25, PM10, calculateAQI } from '../utils/calculator'

const App: React.FC<{}> = () => {
  useEffect(() => {
    (async function getData(query: string) {
      const cities = await fetchCities(query);
      const city = cities[0];
      const aqi = await fetchAQI(city).then(console.log);
      return aqi
    })("Tehran");
  })

  return (
    <div>
      <img src="icon.png" />
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
