import React, { useState } from "react";
import Card from "../UI/Card";
import AddExpenseButton from "./AddExpenseButton";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formVisibility, setFormVisibility] = useState(false);

  const saveExpenseDataHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random.toString(),
    };
    props.onAddExpenseHandler(expenseData);
  };

  return (
    <Card className="p-2.5 bg-[#B1E1FF]">
      {!formVisibility ? (
        <AddExpenseButton onSetFormVisibility={setFormVisibility} />
      ) : (
        <ExpenseForm
          onSetFormVisibility={setFormVisibility}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </Card>
  );
};

export default NewExpense;
