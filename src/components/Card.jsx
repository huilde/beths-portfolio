import { Col, Row } from "antd";
import React from "react";

const Card = (props) => {
  const { title, button, text, svg, projeto, link } = props;
  const classe = `card ${projeto}`;
  return (
    <div className={classe}>
      <div className="title">
        {svg} {title}
      </div>
      <Col flex="auto"></Col>
      <div className="principal-text">{text}</div>
      <button onClick={() => link()} className="card-button">
        {button}
      </button>
    </div>
  );
};

export { Card };
