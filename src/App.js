import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://hn.algolia.com/api/v1/search?tags=front_page")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.hits);
        setList(data.hits);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Body list={list} />
    </div>
  );
}

export default App;
