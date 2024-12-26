import React from 'react'
import { useState } from 'react'


const P2 = ({status}) => {

  const [value, setvalue] = useState('offline')

  const handleclick = () => {
    if (value == status) {
      setvalue(alert("User is online"))
    } else {
      setvalue(alert("User is offline"))
    }
  }


  return (
    <div>
      <button className='btn' onClick={handleclick}>Check User is online or offline</button>
    </div>
  )
}

export default P2
