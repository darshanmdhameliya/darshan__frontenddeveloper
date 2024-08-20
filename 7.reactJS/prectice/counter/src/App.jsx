import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, darshancounter] = useState(0)

  const addValue = () => {
    if (counter > 19) {
      alert('value is greter tehn 20 so...')
    } else {
      darshancounter(counter + 1)
      console.log("Add", counter + 1);
    }
  }

  const removeValue = () => {
    if (counter == 0) {
      alert('counter is 0')
    } else {
      darshancounter(counter - 1)
      console.log("Remove", counter - 1);
    }
  }

  return (
    <>
      <h1>darshan dhameliya</h1>
      <h2>counter value : {counter}</h2>

      <button
        onClick={addValue}
      >Add value</button>
      <br />
      <button onClick={removeValue}>Remove value </button>

    </>
  )
}

export default App
