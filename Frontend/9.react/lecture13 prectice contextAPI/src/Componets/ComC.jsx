import React from 'react'
import { useContext } from 'react'
import { ContextProvider } from '../Context/Context'

const ComC = () => {

  const hi = useContext(ContextProvider)
  
  return (
    <div>
      {hi.B}
    </div>
  )
}

export default ComC
