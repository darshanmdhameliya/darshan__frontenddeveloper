import React, { useState } from 'react'
import ExpenseContext from '../context/ExpenseContext'

const ExpenseContextProvider = ({children}) => {

    const [Add_Expense , setAdd_Expense] = useState([])

    console.log("adddexpense",Add_Expense);
    

  return (
    <div>
      <ExpenseContext.Provider value={{Add_Expense,setAdd_Expense}}>
        {children}
      </ExpenseContext.Provider>
    </div>
  )
}

export default ExpenseContextProvider
