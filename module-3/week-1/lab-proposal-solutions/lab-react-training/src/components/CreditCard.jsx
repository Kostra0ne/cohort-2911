import React from 'react';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  expirationYear %= 100;
  expirationMonth =
    expirationMonth <= 9 ? '0' + expirationMonth : expirationMonth;
  number = number.slice(-4);
  const logo = type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg';
  return (
    <>
      <div
        className="credit-card"
        style={{
          backgroundColor: bgColor,
          color: color,
        }}
      >
        <img className="logo" src={logo} alt=""></img>
        <div
          className="number"
          style={{
            fontSize: '3rem',
          }}
        >
          •••• •••• •••• {number}
        </div>
        <div className="infos">
          <div className="personal">
            <p>
              Expires {expirationMonth}/{expirationYear}
            </p>
            <p>{owner}</p>
          </div>
          <p>{bank}</p>
        </div>
      </div>
    </>
  );
}

export default CreditCard;
