import React, { useState } from 'react'
import ExpenseContext from '../context/ExpenseContext'

const ExpenseContextProvider = ({children}) => {

    const [Add_Expense , setAdd_Expense] = useState([])

  return (
    <div>
      <ExpenseContext.Provider value={{Add_Expense,setAdd_Expense}}>
        {children}
      </ExpenseContext.Provider>
    </div>
  )
}

export default ExpenseContextProvider
