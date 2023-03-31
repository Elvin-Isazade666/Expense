import React from 'react'

const ExpenseForm = ({amount,charge,handlerCharge,handlerAmount,handlerSubmit}) => {
    
    return (

        <div className='add-container'>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label> <br />
                    <input type="text" placeholder='Enter text...' id='text' name='text' value={charge} onChange={handlerCharge} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label> <br />
                    <input type="number" placeholder='Enter amount...' id='amount' name='amount' value={amount} onChange={handlerAmount} />
                </div>
                <button type='submit' onClick={handlerSubmit}>Add transaction</button>
            </form>
        </div>
    )
}

export default ExpenseForm;