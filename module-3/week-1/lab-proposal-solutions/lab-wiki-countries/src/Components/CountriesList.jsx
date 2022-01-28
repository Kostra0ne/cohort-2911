import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const { countries } = props;
  console.log(countries);
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country) => {
          return (
            <div
              key={country.alpha3Code}
              className="list-group-item list-group-item-action"
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt=""
              />
              <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
