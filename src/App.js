import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<h1>home</h1>} />
        <Route path='/about' element={<h1>about</h1>} />
        <Route path='/cart' element={<h1>cart</h1>} />
        <Route path='/products' element={<h1>products</h1>} />
        <Route path='/products/:id' element={<h1>single product</h1>} />
        <Route path='/checkout' element={<h1>checkout</h1>} />

        <Route path='*' element={<h1>error</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
