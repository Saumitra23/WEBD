import React from "react";

const Date = (props) => {
  const month = props.eD.toLocaleString("en-US", { month: "long" });
  const day = props.eD.toLocaleString("en-US", { day: "2-digit" });
  const year = props.eD.getFullYear();

  return (
    <div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
};

export default Date;
