import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import axios from 'axios';

const CountryDetail = ({ countries }) => {
  const [country, setCountry] = useState({});
  const [borders, setBorders] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries/' + params.id)
      .then(({ data }) => {
        console.log(data);
        setCountry(data);
      })
      .catch((e) => console.log(e));
  }, [params.id]);

  useEffect(() => {
    if (!country.borders) return;
    const bordersToAdd = country.borders.map((countryCode) => {
      const foundCountry = countries.find(
        (country) => country.alpha3Code === countryCode
      );
      return foundCountry.name.common;
    });
    setBorders(bordersToAdd);
  }, [country]);

  if (!country.name) return <div>Loading</div>;
  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borders.length === 0 ? (
                  <p>{country.name.common} has no bordering countries</p>
                ) : (
                  borders.map((c, i) => {
                    return (
                      <li key={c}>
                        <Link to={`/${country.borders[i]}`}>{c}</Link>
                      </li>
                    );
                  })
                )}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail;
