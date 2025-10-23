import React from "react";
import aboutData from "../data/aboutData";

function about({ title, content }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <p>{content}</p>
    </div>
  );
}

export default about;

