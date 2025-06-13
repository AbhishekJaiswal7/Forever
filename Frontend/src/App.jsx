import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Collections from './Pages/Collections'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import PlaceOrder from './Pages/PlaceOrder'
import Orders from './Pages/Orders'
import Login from './Pages/Login'
import NavBar from "./Components/NavBar"
import Footer from './Components/Footer'
import SearchBar from './Components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './Pages/Verify'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <NavBar/>
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/collections" element={<Collections/>} />
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/place-order" element={<PlaceOrder/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/verify" element={<Verify/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
