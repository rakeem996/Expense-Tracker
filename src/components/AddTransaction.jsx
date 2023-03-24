import React from 'react'

function AddTransaction() {
  return (
    <div className='add-transaction'>
      <h3>Add new transaction</h3>
      <form action="">
        <div className="form-control">
            <label htmlFor="text" className='text-label'>Text</label>
            <input type="text" placeholder='Enter text...' />
        </div>
        <div className="form-control">
            <label htmlFor="amount" className='number-label'>
                Amount <br />
                (negative-expense, positive-income)
            </label>
            <input type="number" placeholder='Enter amount...' />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
