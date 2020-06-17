import React from "react";

const Card = (props) => {
  return (
    <div className="tc georgia bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robotphoto" src={`https://robohash.org/z${props.id}`} />
      <div>
        <h2>{props.name}</h2>
        <h3>{props.username}</h3>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
