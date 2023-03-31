import React from 'react';
import ExpenseItem from "./ExpenseItem";

const ExpenseLists = ({expenses,deleteItem}) => {
  return (
    <div className='transaction-container'>
      {
        expenses.length>0 ? <h2>History</h2> : null
      }
        
        <ul className='list'>
            {expenses.map((expense)=>{
              return <ExpenseItem key={expense.id} expense={expense} deleteItem={deleteItem}/>
            })}

            {/* <li className="minus">
                Cash <span>-$400</span> <button className='delete-list'>x</button>
            </li> */}
        </ul>
    </div>
  )
}

export default ExpenseLists;