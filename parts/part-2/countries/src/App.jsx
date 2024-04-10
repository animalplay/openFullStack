import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { Countries } from "./components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');

  useEffect(() => {
    fetch('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  }

  const filteredCountries = countries.filter((item) =>
    item.name.common.toLowerCase().includes(country.toLowerCase())
  );

  return (
    <>
      <Filter value={country} handleChange={handleChangeCountry} />
      {
        country === "" 
          ? <p>Write something in the input...</p> 
          : <Countries countries={filteredCountries} />
      }
    </>
  );
}

export default App;
