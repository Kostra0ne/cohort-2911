import React, { Component } from 'react';

export class Dice extends Component {
  state = {
    spinning: false,
  };

  handleClick = () => {
    const timeoutId = setTimeout(() => {
      this.setState({
        spinning: !this.state.spinning,
      });
      clearTimeout(timeoutId)
    }, 1000);
    this.setState({
      spinning: !this.state.spinning,
    });
  };

  render() {
    return (
      <div className="dice">
        <img
          src={this.state.spinning ? path('-empty') : randomDice()}
          alt="Dice"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

function randomDice() {
  return path(Math.floor(Math.random() * 6) + 1);
}

function path(string) {
  return `/img/dice/dice${string}.png`;
}

export default Dice;
