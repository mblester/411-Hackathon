import { render } from "@testing-library/react";
import React from "react";

export default function Body(props) {
  console.log("props", props);

  return (
    <div className="app-container">
      {props.list.map((item, index) => {
        const dateToStr = item.created_at.toString();
        const date = new Date(dateToStr);
        const compareFullYear = date.getUTCFullYear();
        const currDate = new Date();
        const currYear = currDate.getFullYear();
        const renderYears = currYear - compareFullYear;
        console.log(renderYears);
        return (
          <div className="div-display-container" key={index}>
            <article className="story-container">
              <div className="header-url-container">
                <h3>{item.title}</h3>
                <a className="url" href={item.url}>
                  {" "}
                  ({item.url})
                </a>
              </div>
              <nav className="story-bar">
                <a className="" href={item.points}>
                  {item.points} points |{" "}
                </a>
                <a href={item.author}> {item.author} | </a>
                <a href={item.created_at}> {renderYears} years ago | </a>
                <a href={item.num_comments}> {item.num_comments} comments</a>
              </nav>
            </article>
          </div>
        );
      })}
    </div>
  );
}
