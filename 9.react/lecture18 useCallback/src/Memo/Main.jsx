import React from 'react'
import Memo from './Memo1'
import {useState} from 'react'

const Main = () => {

  const [count ,setcount] = useState(0)

  const handlecount =()=>{
    setcount(count+1)
  }

console.log("rerender");

  return (
    <div>
      <h1>This is main file</h1>
      <button onClick={handlecount} >click {count}</button>
      <Memo name="darshan"/>
    </div>
  )
}

export default Main
