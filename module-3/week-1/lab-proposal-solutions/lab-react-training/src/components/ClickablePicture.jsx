import React, { Component } from 'react';

export class ClickablePicture extends Component {
  state = {
    clicked: false,
  };

  handlePicture = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <div>
        <img
          src={this.state.clicked ? this.props.imgClicked : this.props.img}
          alt="Maxence"
          onClick={this.handlePicture}
        />
      </div>
    );
  }
}

export default ClickablePicture;
