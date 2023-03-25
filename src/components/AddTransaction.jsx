import React, { useState } from "react";

function AddTransaction() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);

  return (
    <div className="add-transaction">
      <h3>Add new transaction</h3>
      <form action="">
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
          <label htmlFor="amount" className="number-label">
            Amount <br />
            (negative-expense, positive-income)
          </label>

          <input
            type="number"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            value={number}
            placeholder="Enter amount..."
          />
          
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
