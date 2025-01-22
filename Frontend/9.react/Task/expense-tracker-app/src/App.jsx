import React from 'react'
import OldVersion from './Routing/OldVersion'
import ExpenseContextProvider from './context/ExpenseContextProvider'

const App = () => {
  return (
    <div>
      <ExpenseContextProvider>
        <OldVersion />
      </ExpenseContextProvider>
    </div>
  )
}

export default App
