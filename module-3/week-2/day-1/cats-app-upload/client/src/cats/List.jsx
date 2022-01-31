import React from "react";

export default function List({ cats, handleView, handleDelete }) {
  return (
    <div className="cat-list-wrap">
      <h1>all cats</h1>
      <ul className="list">
        {cats.length === 0 ? (
          <p>no cats...</p>
        ) : (
          cats.map((cat, i) => (
            <li className="item" key={i}>
              <img className="cat-image" src={cat.image} alt="a cool cat thaaaang ;)" />
              <span>name: {cat.name}</span>
              <span>age: {cat.age}</span>
              <span>color: {cat.color}</span>
              <div className="buttons">
                <button onClick={() => handleView(cat._id, "details")}>
                  details
                </button>
                <button onClick={() => handleView(cat._id, "update")}>
                  update
                </button>
                <button onClick={() => handleDelete(cat._id)}>delete</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
