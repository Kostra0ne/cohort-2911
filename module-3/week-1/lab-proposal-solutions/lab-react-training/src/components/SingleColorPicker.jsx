import React from 'react';

const SingleColorPicker = ({ color, value, cb }) => {
  let rgb = '';
  if (color === 'r') {
    rgb = `rgb(${value}, 0, 0)`;
  } else if (color === 'g') {
    rgb = `rgb(0, ${value}, 0)`;
  } else {
    rgb = `rgb(0, 0, ${value})`;
  }
  return (
    <div className="singleColorContainer">
      <div
        className="squareColor"
        style={{
          backgroundColor: rgb,
        }}
      ></div>
      <label htmlFor={color}>
        {color.toUpperCase()}:&nbsp;&nbsp;
        <input
          type="number"
          value={value}
          onChange={(e) => cb(e)}
          name={color}
          id={color}
          min="0"
          max="255"
        />
      </label>
    </div>
  );
};

export default SingleColorPicker;
