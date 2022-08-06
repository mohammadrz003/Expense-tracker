import React, { useState } from "react";

const formInitialValues = {
  title: "",
  amount: "",
  date: "",
};

const ExpenseForm = (props) => {
  const [enteredExpensesData, setEnteredExpensesData] =
    useState(formInitialValues);

  const inputChangeHandler = (event) => {
    const value = event.target.value;
    setEnteredExpensesData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      ...enteredExpensesData,
      amount: +enteredExpensesData.amount,
      date: new Date(enteredExpensesData.date),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredExpensesData(formInitialValues);
    props.onSetFormVisibility(false);
  };

  const changeVisibilityHandler = () => {
    props.onSetFormVisibility(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-wrap space-y-5 md:space-y-0">
        <div className="flex flex-col space-y-2 w-full md:w-1/2 md:p-2.5">
          <label className="text-semibold text-lg" htmlFor="title">
            Title
          </label>
          <input
            onChange={inputChangeHandler}
            name="title"
            value={enteredExpensesData.title}
            className="input"
            id="title"
            type="text"
          />
        </div>
        <div className="flex flex-col space-y-2 w-full md:w-1/2 md:p-2.5">
          <label className="text-semibold text-lg" htmlFor="amount">
            Amount
          </label>
          <input
            onChange={inputChangeHandler}
            name="amount"
            value={enteredExpensesData.amount}
            className="input"
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="flex flex-col space-y-2 w-full md:w-1/2 md:p-2.5">
          <label className="text-semibold text-lg" htmlFor="date">
            Date
          </label>
          <input
            onChange={inputChangeHandler}
            name="date"
            value={enteredExpensesData.date}
            className="input"
            id="date"
            type="date"
            min="2021-01-01"
            max="2025-12-31"
          />
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:p-2.5 flex justify-end space-x-3">
        <button onClick={changeVisibilityHandler} type="button" className="btn">
          Cancel
        </button>
        <button type="submit" className="btn">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
