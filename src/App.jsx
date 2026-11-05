import { Route, Routes } from 'react-router'
import './App.css'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import PageNotFound from './pages/PageNotFound'
import View from './pages/View'
import Header from './components/header'
import Footer from './components/Footer'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router'
import '/bootstrap.min.css'


function App() {

  return (
    <>
    
         <Header />
         <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='product/:id' element={<View />} />
          <Route path='/*' element={<PageNotFound />} />
         </Routes>
         <Footer />
      
    </>
  )
}

export default App
