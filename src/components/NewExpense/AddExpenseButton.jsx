import React from "react";

const AddExpenseButton = (props) => {
  const changeVisibilityHandler = () => {
    props.onSetFormVisibility(true);
  };

  return (
    <div className="w-full flex justify-center">
      <button onClick={changeVisibilityHandler} className="btn">
        Add Expense
      </button>
    </div>
  );
};

export default AddExpenseButton;
