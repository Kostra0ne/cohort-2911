const convertCentimetersToMeter = (value) => value / 100;

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  const date = birth.toDateString();
  return (
    <>
      <div className="container">
        <div className="user-picture-wrapper">
          <img src={picture} alt="user" />
        </div>
        <div className="IdCard content">
          <p>
            <span className="bold">First name: </span>
            {firstName}
          </p>
          <p>
            <span className="bold">Last name: </span>
            {lastName}
          </p>
          <p>
            <span className="bold">Gender: </span>
            {gender}
          </p>
          <p>
            <span className="bold">Height: </span>
            {convertCentimetersToMeter(height)}m
          </p>
          <p>
            <span className="bold">Birth: </span>
            {date}
          </p>
        </div>
      </div>
    </>
  );
}

export default IdCard;
