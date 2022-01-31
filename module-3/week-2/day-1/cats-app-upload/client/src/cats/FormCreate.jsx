import React, { useState, useRef } from "react";
import APIHandler from "./../api/APIHandler";

// APIHandler.delete
// APIHandler.get
// APIHandler.patch
// APIHandler.post

function FormCreateHook({ handler }) {
  const [cat, setCat] = useState({ name: "test cat", age: 0, color: "black" });
  const imageRef = useRef(""); // usefull when you to target on specific element in the virtual-dom
  // see this as the react's way to do document.getElementById

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent the form to reload
    const { name, age, color } = cat; // destructuring the state
    const formData = new FormData(); // create a form data => an object to send as post body

    // appending the keys / values pairs to the FormData
    formData.append("name", name); // create a key [name] on the formDate
    formData.append("age", age); // create a key [age] on the formDate
    formData.append("color", color); // create a key [color] on the formDate
    // last: accessing the image out of the ref ...
    formData.append("image", imageRef.current.files[0]); // target the image file associated to the input[type=file]

    // console.log("------ FORM DATA -----");
    // console.log(formData); // <= this looks like a empty object
    // for (let v of formData.entries()) {
    // an iterator is needed to actually see what you stored inside the formData object
    //   console.log(v);
    // }

    try {
      const res = await APIHandler.post("/api/cats", formData); // sending the formData
      console.log("done", res.data);
      handler();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form>
      <h1>create a new cat</h1>
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
  );
}

export default FormCreateHook;
