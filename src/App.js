import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";

function App() {
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if(searchInput){
      fetch(`http://hn.algolia.com/api/v1/search?query=${searchInput}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.hits);
          setList(data.hits);
        });
    }
    console.log(searchInput)
    fetch("http://hn.algolia.com/api/v1/search?tags=front_page")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.hits);
        setList(data.hits);
      });
  }, [searchInput]);

  return (
    <div className="App">
      <Header state={searchInput} setState={setSearchInput} />
      <Body list={list} />
    </div>
  );
}

export default App;
