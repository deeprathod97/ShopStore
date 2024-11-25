import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ProductGrid from './components/ProductGrid'
import CartPage from './components/CartPage'
import AboutPage from './components/AboutPage'
import CheckoutPage from './components/CheckoutPage'

function App() {
  const [showCart, setShowCart] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    if (showCheckout) {
      return <CheckoutPage onBack={() => setShowCheckout(false)} />
    }
    
    if (showCart) {
      return <CartPage onCheckout={() => setShowCheckout(true)} />
    }
    
    switch (currentPage) {
      case 'about':
        return <AboutPage />
      case 'home':
      default:
        return (
          <>
            <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
            <ProductGrid />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar 
        onCartClick={() => {
          setShowCart(!showCart)
          setShowCheckout(false)
        }} 
        onNavigate={(page) => {
          setCurrentPage(page)
          setShowCart(false)
          setShowCheckout(false)
        }}
        currentPage={currentPage}
      />
      <main className="container mx-auto py-8">
        {renderPage()}
      </main>
    </div>
  )
}

export default App