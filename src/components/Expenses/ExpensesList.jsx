import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (!props.items.length) {
    return <p className="text-center">No expenses found.</p>;
  }

  return (
    <ul>
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
