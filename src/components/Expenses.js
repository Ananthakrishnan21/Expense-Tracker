import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
  const [year, setYear] = useState("2023");
  const dropData = (data) => {
    setYear(data);
  };
  let filteredData=props.data.filter((exp)=>{
    return exp.date.getFullYear().toString()===year
  })
  return (
    <div>
      <ExpenseFilter selected={year} onDropChange={dropData} />
      <ExpenseChart data={filteredData}/>
      <ExpenseList item={filteredData}/>
    </div>
  );
};

export default Expenses;
