import React from 'react'

const ExpenseItem = ({expense,deleteItem}) => {
    const {id,charge,amount} = expense;
  return (
     <li className="minus">
        {charge} <span>{amount}</span> <button className='delete-list' onClick={(e)=>deleteItem(id)}>x</button>
    </li> 
  )
}

export default ExpenseItem;