import React from "react";

const Card = (props) => {
  return <div className={`card card__project ${props.style} `}>{props.children}</div>;
};

export default Card;
