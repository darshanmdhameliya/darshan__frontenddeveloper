import { useState } from 'react'
import './App.css'
import Card from './componet/card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    username: "darshan",
    age: 20
  }

  let myarray = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 rounded-xl mb-4'>tailwind test</h1>
      <Card name="darshandhameliya" btntext="click me" />
      <Card name="darling"  />
    </>
  )
}

export default App
