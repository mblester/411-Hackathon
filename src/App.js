import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import { Pagination } from "./Pagination";
import SelectMenu from "./SelectMenu";

function App() {
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [date, setDate] = useState("all");
  const [timeOrPop, setTimeOrPop] = useState("Popularity");
  const [type, setType] = useState("story");

  let search = "";
  let timeStampG = 0;
  let timeStampL = 0;
  let tag = type;

  if (timeOrPop === "Date") {
    search = "search_by_date";
  } else search = "search";

  if (date === "all") {
    timeStampL = 0;
    timeStampG = 31536000000;
  } else if (date === "last24h") {
    timeStampL = 0;
    timeStampG = 86400;
  } else if (date === "pastWeek") {
    timeStampL = 86400;
    timeStampG = 604800;
  } else if (date === "pastMonth") {
    timeStampL = 604800;
    timeStampG = 2630000;
  } else if (date === "pastYear") {
    timeStampL = 2630000;
    timeStampG = 31536000;
  }

  useEffect(() => {
    console.log(
      date,
      type,
      timeOrPop,
      searchInput,
      search,
      timeStampL,
      timeStampG
    );

    if (searchInput) {
      fetch(
        `http://hn.algolia.com/api/v1/${search}?tags=${tag}&query=${searchInput}&numericFilters=created_at_i>${timeStampL}`
        // `http://hn.algolia.com/api/v1/${search}?tags=${tag}&query=${searchInput}&numericFilters=created_at_i>${timeStampL},created_at_i<${timeStampG}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.hits);
          setList(data.hits);
        });
    }
    fetch(
      `http://hn.algolia.com/api/v1/${search}?tags=${tag}&query=${searchInput}&numericFilters=created_at_i>${timeStampL}`
      // `http://hn.algolia.com/api/v1/${search}?tags=${tag}&query=${searchInput}&numericFilters=created_at_i>${timeStampL},created_at_i<${timeStampG}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.hits);
        setList(data.hits);
      });
  }, [searchInput, date, type, timeOrPop, tag, search, timeStampG, timeStampL]);

  return (
    <div className="App">
      <Header state={searchInput} setState={setSearchInput} />
      
      <SelectMenu
        setType={setType}
        setDate={setDate}
        setTimeOrPop={setTimeOrPop}
      />
      <Body
        list={list}
        type={type}
        date={date}
        timeOrPop={timeOrPop}
        setDate={setDate}
      />
      <Pagination />
    </div>
  );
}

export default App;
