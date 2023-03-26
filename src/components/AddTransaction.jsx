import React, { useState ,useContext} from "react";
import { GlobalContext } from "../context/globalState";

function AddTransaction() {

  const {addTransaction} = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  function onSubmit(e){
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random()) * 100000,
      text,
      amount:+amount,
    }
    addTransaction(newTransaction);
  }

  return (
    <div className="add-transaction">
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit} action="">
        <div className="form-control">

          <label htmlFor="text" className="text-label">
            Text
          </label>

          <input
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
            placeholder="Enter text..."
          />

        </div>

        <div className="form-control">
          <label htmlFor="amount" className="amount-label">
            Amount <br />
            (negative-expense, positive-income)
          </label>

          <input
            type="amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            value={amount}
            placeholder="Enter amount..."
          />
          
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
