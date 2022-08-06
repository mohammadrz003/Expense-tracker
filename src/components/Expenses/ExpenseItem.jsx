import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="w-full p-4 bg-white flex items-center space-x-4">
        <ExpenseDate date={props.date} />
        <div className="flex flex-1 justify-between items-center space-x-4">
          <h2 className="font-semibold text-lg">{props.title}</h2>
          <div className="bg-[#2BB3C0] text-white rounded p-2">
            ${props.amount}
          </div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
