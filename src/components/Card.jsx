import React from "react";

const Card = (props) => {
  const { title, button, text, svg, projeto } = props;
  const classe = `card ${projeto}`;
  return (
    <div className={classe}>
      <div className="title">
        {svg} {title}
      </div>
      <div className="principal-text">{text}</div>
      <button className="card-button">
        <p>{button}</p>
      </button>
    </div>
  );
};

export { Card };
