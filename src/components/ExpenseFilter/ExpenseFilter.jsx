import React, { useState } from "react";

const ExpenseFilter = (props) => {
  const selectYearHandler = (event) => {
    props.onFilterByYearHandler(event.target.value);
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center">
        <h5 className="tracking-wide font-normal text-lg">Filter By year</h5>
        <select
          onChange={selectYearHandler}
          value={props.filterByYear}
          className="select w-full max-w-[10rem]"
        >
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
