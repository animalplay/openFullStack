import { useState, useEffect } from "react";
import { Weather } from "./Weather";

export const CountryDetails = ({ country }) => {
  const [weatherCapital, setWeatherCapital] = useState({})

  const name = country.name.common;
  const flag = country.flags.png;
  const capital = country.capital;
  const area = country.area;
  const languages = country.languages;
  const lat = country.capitalInfo.latlng[0];
  const lon = country.capitalInfo.latlng[1];


  const api_key = import.meta.env.VITE_SOME_KEY; //Variable de entorno.

  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
      .then(response => response.json())
      .then(data => setWeatherCapital(data))
      .catch(error => console.error('Error:', error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat,lon])

  return (
    <section>
      <h2>{name}</h2>
      <p>Capital: <strong>{capital}</strong></p>
      <p>Area: {area}</p>
      <h3>Languages: </h3>
      <ul>
        {Object.values(languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={flag} alt="Country's Flag" />

      <h2>Weather in {capital}</h2>

      <Weather weather={weatherCapital} />

    </section>
  );
};
