import React, { Component } from 'react';
import '../css/LikeButton.css';

export class LikeButton extends Component {
  state = {
    count: 0,
    color: '',
    isTrue: false,
    cat: { name: 'lola' },
  };

  randomColor = () => {
    const color = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const index = Math.floor(Math.random() * color.length);
    return color[index];
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    //const treshold = (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000' : '#fff'

    return (
      <div className="container-button">
        <button
          onClick={this.handleIncrement}
          style={{
            backgroundColor: this.randomColor(),
            border: '2px solid ' + this.randomColor(),
            //color: treshold
          }}
        >
          {this.state.count} {this.state.count === 1 ? 'Like' : 'Likes'}
        </button>
      </div>
    );
  }
}

export default LikeButton;
