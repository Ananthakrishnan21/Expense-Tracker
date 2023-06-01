import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = (props) => {
  const [titleInput, setTitleInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  

  const titleChangeHandler = (event) => {
    setTitleInput(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmountInput(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDateInput(event.target.value);
  };
  const submitData = (event) => {
    event.preventDefault();
    const userData = {
      title: titleInput,
      amount: +amountInput,
      date: new Date(dateInput),
    };
    props.onExpenseData(userData);
    setTitleInput("");
    setAmountInput("");
    setDateInput("");
    props.onDisappear()
  };
  const disHandler=()=>{
    props.onDisappear()
  }
  return (
    <form onSubmit={submitData}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={titleInput} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            value={amountInput}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={dateInput}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={disHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  )
};

export default ExpenseForm;
