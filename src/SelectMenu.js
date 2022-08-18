import React from "react";

export default function SelectMenu({ list, setType, setDate, setTimeOrPop }) {
  // const handleChange = (e) => {
  // list.forEach((item) => {
  //   if (e.target.value === "all") {
  //     setDate(Date.now().getTime());
  //   } else if (e.target.value === "past24h") {
  //     setDate(new Date(item.created_at).getTime() + 86400);
  //   } else if (e.target.value === "pastWeek") {
  //     setDate(new Date(item.created_at).getTime() + 604800);
  //   } else if (e.target.value === "pastMonth") {
  //     setDate(new Date(item.created_at).getTime() + 2630000);
  //   } else if (e.target.value === "pastYear") {
  //     setDate(new Date(item.created_at).getTime() + 31536000);
  //   }
  //   console.log(
  //     "date vs date plus time",
  //     new Date(item.created_at).getTime(),
  //     new Date(item.created_at).getTime() + 86400
  //   );
  // });
  // };

  return (
    <div className="select-menu">
      <label>Search </label>
      <select
        className="select"
        onChange={(e) => setType(e.target.value)}
        name="storiesComments"
      >
        <option value="story">All</option>
        <option value="story">Stories</option>
        <option value="comment">Comments</option>
      </select>
      <label> by </label>
      <select
        className="select"
        onChange={(e) => setTimeOrPop(e.target.value)}
        name="popularityDate"
      >
        <option value="search">Popularity</option>
        <option value="search_by_date">Date</option>
      </select>
      <label> for </label>
      {/* <select className="select" onChange={(e) => handleChange(e)} name="time"> */}
      <select className="select" onChange={(e) => setDate(e.target.value)}>
        <option value={Date.now()}>All time</option>
        <option value={Date.now() - 86400}>Last 24h</option>
        <option value={Date.now() - 604800}>Past Week</option>
        <option value={Date.now() - 2630000}>Past Month</option>
        <option value={Date.now() - 31536000}>Past Year</option>
      </select>
    </div>
  );
}
