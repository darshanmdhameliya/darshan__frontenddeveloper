import React from 'react'
import { useState } from 'react'
import { ContextProvider } from './Context/Context'
import ComA from './Componets/ComA'
import ComB from './Componets/ComB'
import ComC from './Componets/ComC'

const App = () => {

  const [count, setcount] = useState(0)


  const nextstep = () => {
    if (count < 10) {
      setcount(count + 1)
    }
    else {
      setcount(0)
    }
  }

  const prevstep = () => {
    if (count > 0) {
      setcount(count - 1)
    }
    else {
      setcount(0)
    }


  }

  return (
    <div>
      <ContextProvider.Provider value={{ count, nextstep, prevstep }}>
        <ComA />
        <ComB />
        <ComC />
      </ContextProvider.Provider>
    </div>
  )
}

export default App
