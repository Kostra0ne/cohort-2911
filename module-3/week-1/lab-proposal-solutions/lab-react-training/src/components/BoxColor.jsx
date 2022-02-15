import React from 'react';

function BoxColor({ r, g, b }) {
  let rgbAsHex = rgbToHex(r, g, b);
  const treshold = r * 0.299 + g * 0.587 + b * 0.114 > 130 ? '#000' : '#fff';
  return (
    <>
      <div
        className="container BoxColor"
        style={{
          height: 50,
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
          color: treshold,
        }}
      >
        <p>
          rgb({r}, {g}, {b}) <br />
        </p>
        <p>{rgbAsHex}</p>
      </div>
    </>
  );
}

export default BoxColor;

function rgbToHex(r, g, b) {
  const rH = r < 10 ? '0' + r.toString(16) : r.toString(16);
  const gH = g < 10 ? '0' + g.toString(16) : g.toString(16);
  const bH = b < 10 ? '0' + b.toString(16) : b.toString(16);

  return '#' + rH + gH + bH;
}
