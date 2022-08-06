import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterByYear, setFilterByYear] = useState("2021");
  const [filteredList, setFilteredList] = useState(props.items);

  const filterByYearHandler = (enteredYear) => {
    setFilterByYear(enteredYear);
  };

  useEffect(() => {
    const filterListByYear = props.items.filter((item) => {
      return item.date.getFullYear().toString() === filterByYear;
    });
    setFilteredList(filterListByYear);
  }, [filterByYear, props.items]);

  return (
    <Card className="bg-[#F5F4F4] space-y-5 p-5 border border-slate-200">
      <div>
        <ExpenseFilter
          filterByYear={filterByYear}
          onFilterByYearHandler={filterByYearHandler}
        />
      </div>
      <ExpensesChart expenses={filteredList} />
      <div className="space-y-2">
        <ExpensesList items={filteredList} />
      </div>
    </Card>
  );
}

export default Expenses;
