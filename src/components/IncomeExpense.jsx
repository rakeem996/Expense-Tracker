import React from 'react'

function IncomeExpense() {
  return (
    <div className='inc-exp-container'>
      <div className='inc'>
        <h4>Income</h4>
        <p id='money-plus' className='money-plus'>+$0.00</p>
      </div>
      <div className='line'>|</div>
      <div className='exp'>
        <h4>Expense</h4>
        <p id='money-minus' className='money-minus'>-$0.00</p>
      </div>
    </div>
  )
}

export default IncomeExpense
