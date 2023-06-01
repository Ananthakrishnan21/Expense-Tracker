import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import React,{useState} from 'react'

const NewExpense=(props)=>{
    const [flag,setFlag]=useState(false)
    const appearHandler=()=>{
        setFlag(true)
    }
    const disappearHandler=()=>{
        setFlag(false)
    }
    const inputData=(data)=>{
        const inputData={
            ...data,
            id:Math.random().toString()
        }
        props.onUserData(inputData)
    }

    return (
        <div className='new-expense'>
            {!flag && <button onClick={appearHandler}>Add New Expense</button>}
            {flag && <ExpenseForm onDisappear={disappearHandler} onExpenseData={inputData}/>}
        </div>
    )
}

export default NewExpense