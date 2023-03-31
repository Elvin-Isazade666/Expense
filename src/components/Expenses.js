import React from 'react'

const Expenses = ({plus,minus}) => {
    return (
        <div className='money-container'>
            <div className="income-container">
                <h3>Income</h3>
                <p className='money-plus'>${plus}</p>
            </div>
            <div className="expense-container">
                <h3>Expense</h3>
                <p className='money-minus'>${minus}</p>
            </div>
        </div>
    )
}

export default Expenses