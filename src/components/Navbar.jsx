import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
        <NavLink to="/Blog">Blog</NavLink>
    </nav>
  )
}

export default Navbar