import React from 'react'
import './index.css'
import OldVersion from './Componets/OldVersion'
import ProductProvider from './context/ProductContext'


const App = () => {
  return (
    <div>
      <ProductProvider>
        <OldVersion />
      </ProductProvider>
    </div>
  )
}

export default App
