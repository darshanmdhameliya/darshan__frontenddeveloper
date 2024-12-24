import React from 'react'
import './index.css'
import ThemeContextProvider from "./Context/ThemeContextProvider"
import Card from './Componets/Card'
import ThemeButton from './Componets/ThemeButton'

const App = () => {
  return (
    <div>
      <ThemeContextProvider>
        <Card/>
        <ThemeButton/>
      </ThemeContextProvider>
    </div>
  )
}

export default App
