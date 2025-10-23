
// src/components/About.jsx
import React from "react";
import aboutData from "../data/aboutData";

function About() {
  return (
    <section className="about-section">
      {aboutData.map((item, index) => (
        <div key={index} className="about-block">
          {item.title && <h2>{item.title}</h2>}
          <p>{item.content}</p>
        </div>
      ))}
    </section>
  );
}

export default About;
