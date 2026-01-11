import React from 'react'
import {Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-cyan-100 h-12 m-10 flex items-center gap-6 px-87'>
        <Link to={'/home'}>Home</Link>
        <Link to={'/products'}>Products</Link>
        <Link to={'/blog'}>Blog</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contract'}>Contract Us</Link>

    </div>
  )
}

export default Navbar