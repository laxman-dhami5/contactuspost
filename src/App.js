import React from 'react'
import Header from './components/Header'
import Items from './components/Items'
import CartProvider from './components/store/CartProvider'
const App = () => {
  return (
    <CartProvider>
      <Header/>
      <Items/>
    </CartProvider>
  )
}

export default App