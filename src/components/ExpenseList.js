import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'
const ExpenseList = (props) => {
    if(props.item.length===0){
        return <h2 className="expenses-list__fallback">No Expense Found</h2>
    }
  return (
    <ul className="expenses-list">
      {props.item.map((expenses) => {
        return (
          <ExpenseItem
            key={expenses.id}
            date={expenses.date}
            title={expenses.title}
            price={expenses.amount}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
