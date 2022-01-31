import React, { useState, useEffect } from "react"; // useState and useEffect are react 16+ hooks ...
import "./App.css";
import APIHandler from "./api/APIHandler";
import List from "./cats/List";
import Details from "./cats/Details";
import Update from "./cats/FormUpdate";
import Create from "./cats/FormCreate";

function App() {
  const [cats, setCats] = useState([]); // i need a state
  const [catId, setCatdId] = useState(null); // so please react
  const [mode, setMode] = useState("create"); // provide some way to store and mutate informations
  // remember : when the state changes : the component rerenders => REACTIVITY

  // useEffect is a generci hook, replacing componentDidMount AND componentDidUpdate
  // first arg => callback function
  // second arg => an array
  // if the second argument is empty => the hook will behave as componentDidMOunt
  useEffect(() => {
    console.log("MOUNTED !!!!");
    console.log("in effect => same as component did mount");
    // when the component is attached to the DOM => fetchCats
    fetchCats();
  }, []);

  const fetchCats = async () => {
    try {
      const res = await APIHandler.get("/api/cats");
      console.log("api res => ", res);
      setCats(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleView = (newId, mode) => {
    setCatdId(newId);
    setMode(mode);
    fetchCats();
  };

  const handleDelete = async (id) => {
    try {
      await APIHandler.delete(`/api/cats/${id}`);
      fetchCats();
    } catch (err) {
      console.error(err);
    }
  };

  const currentCat = cats.find((c) => c._id === catId);

  return (
    <div className="App">
      {mode === "create" && <Create handler={fetchCats} />}
      {mode === "update" && (
        <Update handleView={handleView} id={catId} cat={currentCat} />
      )}
      <hr />
      <List handleView={handleView} handleDelete={handleDelete} cats={cats} />
      <hr />
      {mode === "details" && (
        <Details cat={currentCat} handleView={handleView} />
      )}
    </div>
  );
}

export default App;
