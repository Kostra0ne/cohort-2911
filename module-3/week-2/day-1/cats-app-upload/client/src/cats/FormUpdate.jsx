import React, { useState, useEffect, useRef } from "react";
import APIHandler from "./../api/APIHandler";

export default function FormUpdate({ id }) {
  const [cat, setCat] = useState(null);
  const imageRef = useRef();

  useEffect(async () => {
    const { data } = await APIHandler.get("/api/cats/" + id);
    setCat(data);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("age", cat.age);
    fd.append("color", cat.color);
    fd.append("image", imageRef.current.files[0]);
    fd.append("name", cat.name);

    try {
      const { data } = await APIHandler.patch(`/api/cats/${id}`, fd);
      console.log("yahaha! ", data);
    } catch (err) {
      console.error(err);
    }
  };

  return cat ? (
    <form>
      <h2>update</h2>
      <input
        name="name"
        type="text"
        placeholder="name"
        value={cat.name}
        onChange={(e) => setCat({ ...cat, name: e.target.value })}
      />
      <input
        name="color"
        type="text"
        placeholder="color"
        value={cat.color}
        onChange={(e) => setCat({ ...cat, color: e.target.value })}
      />
      <input
        name="age"
        type="number"
        placeholder="age"
        value={cat.age}
        onChange={(e) => setCat({ ...cat, age: e.target.value })}
      />

      <input ref={imageRef} name="image" type="file" />
      <button onClick={handleSubmit}>ok</button>
    </form>
  ) : (
    <p>...loading</p>
  );
}
