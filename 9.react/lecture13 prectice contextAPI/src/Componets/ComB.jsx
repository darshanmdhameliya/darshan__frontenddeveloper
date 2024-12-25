import React from 'react'
import { useContext } from 'react'
import { ContextProvider } from '../Context/Context'

const ComB = () => {

  const as = useContext(ContextProvider)
  return (
    <div>
      {as.B}

    </div>
  )
}

export default ComB
