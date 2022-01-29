import React from "react";
import moment from "moment";

const Article = (props) => {
  //prettier-ignore
  const { article:{date, title, length, snippet} } = props;
  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{moment(date).format("MMMM Do YYYY")}</span>
        <span>{length} mins read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
