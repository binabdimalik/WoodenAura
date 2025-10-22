import React from "react";

function about({ title, content }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <p>{content}</p>
    </div>
  );
}

export default about;

