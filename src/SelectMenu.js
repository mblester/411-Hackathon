import React from "react";

export default function SelectMenu({
  type,
  setType,
  date,
  setDate,
  timeOrPop,
  setTimeOrPop,
}) {
  return (
    <div className="select-menu">
      <label>Search </label>
      <select onChange={(e) => setType(e.target.value)} name="storiesComments">
        <option value="story">All</option>
        <option value="story">Stories</option>
        <option value="comment">Comments</option>
      </select>
      <label> by </label>
      <select
        onChange={(e) => setTimeOrPop(e.target.value)}
        name="popularityDate"
      >
        <option value="Popularity">Popularity</option>
        <option value="Date">Date</option>
      </select>
      <label> for </label>
      <select onChange={(e) => setDate(e.target.value)} name="time">
        <option value="all">All time</option>
        <option value="last24h">Last 24h</option>
        <option value="pastWeek">Past Week</option>
        <option value="pastMonth">Past Month</option>
        <option value="pastYear">Past Year</option>
      </select>
    </div>
  );
}
