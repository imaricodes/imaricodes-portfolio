import React from "react";

const Card = (props) => {
  return <div className={`card card-project-card  ${props.style} `}>{props.children}</div>;
};

export default Card;
