import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetail from './Components/CountryDetail';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        console.log(response);
        setCountries(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          {countries.length === 0 ? (
            <div className="loading">Loading...</div>
          ) : (
            <>
              <CountriesList countries={countries} />
              <Routes>
                <Route
                  path="/:id"
                  element={<CountryDetail countries={countries} />}
                />
              </Routes>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
