import React from "react";

const Searchbox = (props) => {
  return (
    <div className="pa2 ">
      <input
        type="search"
        placeholder="type a robot name"
        onChange={props.onSearchChange}
        className="pa3 ba b--green bg-lightest-blue"
      />
    </div>
  );
};

export default Searchbox;
