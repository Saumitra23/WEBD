import React from "react";
import "./ExpenseItem.css";
import Date from "../date/date";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [expenseTitle, setTitle] = useState(props.eT);

  const expenseAmount = props.eA;

  const clickHandler = () => {
    // expenseTitle = "changed";
    setTitle("Changed!!!");
    console.log(expenseTitle);
  };

  const handleMouseEnter = (event) => {
    event.target.style.backgroundColor = "RGB(107,102,103)";
  };

  const handleMouseLeave = (event) => {
    event.target.style.backgroundColor = "RGB(46,46,46)";
  };

  return (
    <div className="expense-item_1">
      <div className="expense_date">
        <Date eD={props.eD} />
      </div>
      <div className="expense-item_11">
        <h2 style={{ color: "white" }}>{expenseTitle}</h2>
        <div className="expense-item_111">Rs. {expenseAmount}</div>
      </div>
      <button
        className="expense-item__button"
        onClick={clickHandler}
        style={{
          width: "auto",
          height: "50px",
          alignSelf: "center",
          cursor: "pointer",
          backgroundColor: "#2e2e2e",
          color: "white",
          border: "1px solid white",
          borderRadius: "5px",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Change Title
      </button>
    </div>
  );
};

export default ExpenseItem;
