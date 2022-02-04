import React from 'react';

function Rating({ children }) {
  const maxRate = 5;
  children = Math.round(children);
  let rating = '';
  for (let i = 0; i < maxRate; i++) {
    i < children ? (rating += '★') : (rating += '☆');
  }
  return (
    <div className="container">
      <div className="rating">{rating}</div>
    </div>
  );
}

export default Rating;
