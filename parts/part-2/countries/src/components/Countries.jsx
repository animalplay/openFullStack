import { useState } from 'react';
import './Countries.css';
import { CountryDetails } from './CountryDetails';

export const Countries = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleShowButtonClick = (country) => {
    setSelectedCountry(country);
  };

  if (!countries) {
    return <p>Loading...</p>;
  }

  if (countries.length > 10) {
    return <p>Too many matches, please specify another filter. Thank you!</p>;
  } else if (countries.length > 1 && countries.length <= 10) {
    return (
      <>
        {countries.map((country, index) => (
          //TODO: Export to component named Country
          <article key={index}>
            <span>{country.name.common}</span>
            <button onClick={() => handleShowButtonClick(country)}>Show</button>
          </article>
        ))}
        {selectedCountry && <CountryDetails country={selectedCountry} />}
      </>
    );
  } else if (countries.length === 1) {
    return <CountryDetails country={countries[0]} />;
  }
};
