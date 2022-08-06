import React, { useState } from "react";
import "./App.css";
import Chart from "./components/Chart/Chart";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: Math.random(),
    title: "Car insurance",
    amount: 72.56,
    date: new Date(2022, 3, 18),
  },
  {
    id: Math.random(),
    title: "New phone",
    amount: 234.98,
    date: new Date(2022, 7, 23),
  },
  {
    id: Math.random(),
    title: "Edible",
    amount: 482.61,
    date: new Date(2021, 1, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (enteredExpenseData) => {
    setExpenses((prevExpenses) => {
      return [enteredExpenseData, ...prevExpenses];
    });
  };

  return (
    <div className="App bg-[#F4F6FF]">
      <div className="container mx-auto max-w-screen-xl">
        <div className="w-full min-h-screen flex justify-center items-center">
          <div className="flex flex-col w-full max-w-xl space-y-4 py-8 px-2">
            <NewExpense onAddExpenseHandler={addExpenseHandler} />
            <Expenses items={expenses} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
