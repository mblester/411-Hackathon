import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import { Pagination } from "./Pagination";
import SelectMenu from "./SelectMenu";

function App() {
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [date, setDate] = useState(Date.now());
  const [timeOrPop, setTimeOrPop] = useState("search");
  const [type, setType] = useState("story");

  useEffect(() => {
    console.log(date, type, timeOrPop, searchInput);

    if (searchInput) {
      fetch(
        `http://hn.algolia.com/api/v1/${timeOrPop}?tags=${type}&query=${searchInput}&numericFilters=created_at_i>0,created_at_i<${date}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.hits);
          setList(data.hits);
        });
    } else {
      fetch(
        `http://hn.algolia.com/api/v1/${timeOrPop}?tags=${type}&numericFilters=created_at_i>0,created_at_i<${date}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.hits);
          setList(data.hits);
        });
    }
  }, [searchInput, date, type, timeOrPop]);

  return (
    <div>
      <Header state={searchInput} setState={setSearchInput} />

      <SelectMenu
        list={list}
        setType={setType}
        setDate={setDate}
        setTimeOrPop={setTimeOrPop}
      />
      <Body list={list} type={type} date={date} timeOrPop={timeOrPop} />
      <Pagination />
    </div>
  );
}

export default App;
