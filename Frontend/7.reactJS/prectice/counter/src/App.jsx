import React from 'react'
import { useState } from 'react'
import Cart from './Cart'

const App = () => {
  const [cart, setcart] = useState(false)
  const addcart = () => {
    if (cart == false) {
      setcart(true)
    } 
  }
  const removecart = () => {
    if (cart == true) {
      setcart(false)
    } 
  }


  return (
    <div>
      <button onClick={addcart}>Add cart</button><br /><br />
      <button onClick={removecart}>Remove cart</button><br /><br />

      {cart && <Cart />}
    </div>
  )
}

export default App
