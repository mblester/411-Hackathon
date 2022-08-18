import React from "react";
import moment from "moment";

export default function Body(props) {
  console.log("props", props);

  return (
    <div className="app-container">
      {props.list.map((item, index) => {
        let time = moment(item.created_at).fromNow();
        console.log(new Date(item.created_at).getTime(), Date.now());
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
                <a
                  href={`https://news.ycombinator.com/item?id=${item.objectID}`}
                >
                  {item.points} points |{" "}
                </a>
                <a href={`https://news.ycombinator.com/user?id=${item.author}`}>
                  {" "}
                  {item.author} |
                </a>
                <a
                  href={`https://news.ycombinator.com/item?id=${item.objectID}`}
                >
                  {" "}
                  {time} |{" "}
                </a>
                <a
                  href={`https://news.ycombinator.com/item?id=${item.objectID}`}
                >
                  {" "}
                  {item.num_comments} comments
                </a>
              </nav>
            </article>
          </div>
        );
      })}
    </div>
  );
}

// const dateToStr = item.created_at.toString();
// const date = new Date(dateToStr);
// console.log(date, dateToStr, momentDate);
// const compareFullYear = date.getUTCFullYear();
// const currDate = new Date();
// const currYear = currDate.getFullYear();
// const renderYears = currYear - compareFullYear;
// console.log(renderYears);
