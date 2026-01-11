import { useState } from 'react'
import './App.css'
import Navbar from './content/Navbar/Navbar'
import Footer from './content/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <h1>Hello App</h1>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
