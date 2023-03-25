import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import Transaction from "./Transaction";


function TransactionList() {
  const { transaction } = useContext(GlobalContext);

  return (
    <div>
      <h3 className="history-heading">History</h3>
      <ul className="list">
        {transaction.map((transaction) => {
          return <Transaction key={transaction.id} transaction={transaction} />
        })}
      </ul>
    </div>
  );
}

export default TransactionList;
