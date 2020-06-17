import React from "react";
import Card from "./Card";

const CardsList = (props) => {
  // if (true) {
  //   throw new Error("Oooops!!");
  // }
  const cardArray = props.robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={props.robots[i].id}
        username={props.robots[i].username}
        email={props.robots[i].email}
        name={props.robots[i].name}
      />
    );
  });
  return <div>{cardArray}</div>;
};

export default CardsList;
