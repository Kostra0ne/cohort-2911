import React, { Component } from 'react';
import data from '../data/berlin.json';
import '../css/FaceBook.css';


const listTheCountries = (list) => {
  return [...new Set(list.map((item) => item.country))];
};

export class FaceBook extends Component {
  state = {
    profiles: data,
    countries: listTheCountries(data),
    selectedCountry: '',
    selectValue: '-1',
    sort: true,
  };

  handleCountrySelect = (e) => {
    this.setState({
      selectedCountry: e.target.value,
      selectValue: e.target.value,
    });
  };

  handleResetSelect = () => {
    this.setState({
      selectedCountry: '',
    });
  };

  handleSortLn = () => {
    const copy = [...this.state.profiles];
    copy.sort((a, b) => a.lastName.localeCompare(b.lastName));
    this.setState({
      profiles: copy,
      sort: !this.state.sort,
    });
  };
  handleSortFn = () => {
    const copy = [...this.state.profiles];
    copy.sort((a, b) => a.firstName.localeCompare(b.firstName));
    this.setState({
      profiles: copy,
      sort: !this.state.sort,
    });
  };

  render() {
    const style = {
      backgroundColor: 'rgb(125, 167, 216)',
    };
    return (
      <>
        <div className="container-buttons">
          <button onClick={this.handleResetSelect}>Reset</button>
          <select onChange={this.handleCountrySelect} value={this.state.selectValue}>
            <option value="-1" disabled>
              Pick a country
            </option>
            {this.state.countries.map((country) => {
              return <option key={country} value={country}>{country}</option>;
            })}
          </select>

          <button
            onClick={this.state.sort ? this.handleSortLn : this.handleSortFn}
          >
            Sort by {this.state.sort ? 'last' : 'first'} name
          </button>
        </div>
        <div className="container-main">
          {this.state.profiles.map((profile) => {
            return (
              <div
                key={profile.firstName}
                className="container-student"
                style={
                  profile.country === this.state.selectedCountry ? style : {}
                }
              >
                <img src={profile.img} alt="" />
                <div className="student-infos">
                  <ul>
                    <li>
                      <span>First name: </span>
                      {profile.firstName}
                    </li>
                    <li>
                      <span>Last name: </span>
                      {profile.lastName}
                    </li>
                    <li>
                      <span>Country: </span>
                      {profile.country}
                    </li>
                    <li>
                      <span>Type: </span>
                      {profile.isStudent ? 'Student' : 'Teacher'}
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default FaceBook;
