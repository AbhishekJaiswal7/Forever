import React, { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import SideBar from './components/SideBar.jsx'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login.jsx'

const App = () => {
  const [token, setToken] = useState('')

  return (
    <div className='bg-gray-50 min-h-screen'>
      {token === '' ? <Login /> :
      <>
      <NavBar />
      <hr />
      <div className='flex w-full'>
        <SideBar />
        <div className='w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base'>
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
      </>
      }
      
    </div>
  )
}

export default App
