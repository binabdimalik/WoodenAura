import React from "react";
import aboutData from "../data/aboutData";

function About({ title, content }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <p>{content}</p>
    </div>
  );
}

export default About;

