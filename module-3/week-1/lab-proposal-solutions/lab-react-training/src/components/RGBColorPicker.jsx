import React, { Component } from 'react';
import '../css/RGB.css'
import SingleColorPicker from './SingleColorPicker';
import BoxColor from './BoxColor';

export class RGBColorPicker extends Component {
  state = {
    rValue: 0,
    gValue: 0,
    bValue: 0,
  };

  handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name + 'Value'
    this.setState({
        [name]: value,
    })
  }

  render() {
    return (
      <>
        <div className="color-container">
          <SingleColorPicker cb={this.handleChange} color={'r'} value={this.state.rValue}/>
          <SingleColorPicker cb={this.handleChange} color={'g'} value={this.state.gValue}/>
          <SingleColorPicker cb={this.handleChange} color={'b'} value={this.state.bValue}/>
          <BoxColor r={this.state.rValue} g={this.state.gValue} b={this.state.bValue} />
        </div>
      </>
    );
  }
}

export default RGBColorPicker;
