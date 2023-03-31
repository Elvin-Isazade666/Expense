import React, { useEffect, useState } from "react";
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import Balance from './components/Balance';
import Expenses from "./components/Expenses";
import ExpenseLists from './components/ExpenseLists';
import uuid from "../node_modules/uuid/dist/v4";

function App() {

  const firstExpenses = localStorage.getItem("expenses") !== null ? JSON.parse(localStorage.getItem("expenses")) : [];

  const [expenses, setExpenses] = useState(firstExpenses);

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [plus, setPlus] = useState(0);
  const [minus, setMinus] = useState(0);

  useEffect(() => {
    if (expenses.length > 0) {
      let sumPlus = 0;
      let sumMinus = 0;
      for (const item of expenses) {
        if (item.amount > 0) {
          sumPlus += (+item.amount);
        } else {
          sumMinus += (+item.amount);
        }
      }
      setPlus(sumPlus);
      setMinus(sumMinus);

    } else {
      setMinus(0);
      setPlus(0);
    }
  }, [expenses]);


  const calculateBalance = (expenses.reduce((total, current) => {
    return total += (+current.amount);
  }, 0));

  const handlerCharge = (e) => {
    setCharge(e.target.value);
  }

  const handlerAmount = (e) => {
    setAmount(e.target.value);
  }

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (calculateBalance === 0 && amount < 0) {
      alert("There is not balance");
      return;
    }

    if ((charge !== "" && amount !== "")) {
      const newExpense = { id: uuid(), charge, amount };
      const updatedExpenses = [...expenses, newExpense];
      setExpenses(updatedExpenses);
      localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
      setCharge("");
      setAmount("");
    } else {
      alert("please fill space");
    }

  }

  const deleteItem = (id) => {
    let delExpenses = expenses.filter((eachexpense) => {
      return eachexpense.id !== id;
    })
    setExpenses(delExpenses);
    localStorage.setItem("expenses", JSON.stringify(delExpenses));
  }



  return (
    <div className="container">
      <div className="app">
        <h1>Expense tracker</h1>
        <Balance balance={calculateBalance} />
        <Expenses plus={plus} minus={minus} />
        <ExpenseLists expenses={expenses} deleteItem={deleteItem} />
        <ExpenseForm charge={charge} amount={amount} handlerCharge={handlerCharge} handlerAmount={handlerAmount} handlerSubmit={handlerSubmit} />
      </div>
    </div>
  );
}

export default App;
