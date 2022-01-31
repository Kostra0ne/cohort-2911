import React from "react";

export default function Details({ cat, handleView }) {
  return (
    <div>
      {!cat ? (
        <p>loading...</p>
      ) : (
        <>
          <h1>
            cat's details <button onClick={() => handleView(null, "create")}>hide</button>
          </h1>
          <p>
            name: {cat.name}
            <br />
            color: {cat.color}
            <br />
            age: {cat.age}
          </p>
        </>
      )}
    </div>
  );
}
