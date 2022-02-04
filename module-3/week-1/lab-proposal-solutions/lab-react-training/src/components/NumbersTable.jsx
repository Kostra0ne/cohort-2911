import React, { Component } from 'react';
import '../css/NumbersTable.css';
import Num from './Num';

const setArray = (limit) => {
  const arr = [];
  for (let i = 1; i <= limit; i++) {
    arr.push(i);
  }
  return arr;
};


export class NumbersTable extends Component {
  state = {
    numbers: setArray(this.props.limit)
  };


  render() {
    return (
      <div className="container">
        {this.state.numbers.map((num) => {
          return <Num num={num} key={num} />;
        })}
      </div>
    );
  }
}

export default NumbersTable;
