import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";

function IncomeExpense() {
  const { transaction } = useContext(GlobalContext);

  const income = transaction
    .filter((transaction) => transaction.amount > 0)
    .map((transaction) => transaction.amount);
  const totalIncome = income.reduce((acc, amt) => (acc += amt), 0).toFixed(2);

  const expense = transaction
    .filter((transaction) => transaction.amount < 0)
    .map((transaction) => transaction.amount);
  const totalExpense = expense.reduce((acc, amt) => (acc += amt), 0).toFixed(2);
  // const income = [1,2,3,4]
  // console.log(totalIncome)

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money-plus">${totalIncome}</p>
      </div>
      <div className="line">|</div>
      <div>
        <h4>Expense</h4>
        <p className="money-minus">${Math.abs(totalExpense)}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
