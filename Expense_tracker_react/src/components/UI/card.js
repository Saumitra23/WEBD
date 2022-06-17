import "./card.css";
import ExpenseItem from "../Expenses/ExpenseItem";
import NewExpense from "../NewExpense/NewExpense";
import ExpenseFilter from "../Expenses/ExpenseFilter";
import { useState } from "react";

const dummy = [
  { title: 'Car Insurance', amount: 5000, date: new Date(2022, 5, 5) },
  { title: 'Life Insurance', amount: 9000, date: new Date(2022, 5, 6) },
  { title: 'Medical Insurance', amount: 7000, date: new Date(2022, 5, 7) },
];

const Card = () => {
  const [expenses, setExpenses] = useState(dummy);

  const [filteredYear, setFilteredYear] = useState("2022");

  const addExpenseHandler = (receivedExpenseData) => {
    setExpenses((prevExpense) => {
      return [receivedExpenseData, ...prevExpense];
    });
    console.log(expenses);
    console.log(receivedExpenseData);
  };

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div className="Cards">
      <div className="Card_1">
        <NewExpense onAddExpense={addExpenseHandler} />
      </div>
      <div className="Card_2">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterHandler} />
        {expenses.map((expense) => (
          <ExpenseItem
            eT={expense.title}
            eA={expense.amount}
            eD={expense.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
