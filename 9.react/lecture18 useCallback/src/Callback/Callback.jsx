import React, { useCallback } from 'react'

import {useState} from 'react'
import Child from './Child'


const Callback = () => {

  const [count ,setcount] = useState(0)

  const handlecount =useCallback(()=>{
    setcount((count)=>count+1)
  },[count])

console.log("rerender");

  return (
    <div>
      <h1>This is main file</h1>
      
      <Child handlecount={handlecount}count={count}/>
    </div>
  )
}

export default Callback
