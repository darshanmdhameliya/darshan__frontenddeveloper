import React from 'react'
import Events from './componets/Events'
import Cart from './componets/prectice'

const App = () => {
  const isclick = true;
  const handlechange = () => {
    if (isclick) {
      return (
        <Cart />
      )
    }
    return (<h1>cart is not render</h1>)
  }
  return (
    <>

      <button onClick={handlechange}>Clcik</button>

    </>
  )
}

export default App
