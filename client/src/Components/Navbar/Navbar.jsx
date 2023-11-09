import React from 'react'
import { NavLink } from 'react-router-dom'
import bookLogo from '../../../public/book.svg'

const Navbar = () => {
  return (
    <div>
      <NavLink to="/" style={{textDecoration:"none"}}> <img style={{ whidth:30, height:30}}src={bookLogo} alt="Logo" /> </NavLink>
      <NavLink to="/sermones" style={{textDecoration:"none"}}> Sermones </NavLink>
      <NavLink to="/about" style={{textDecoration:"none"}}> Nosotros </NavLink>
      <NavLink to="/contact" style={{textDecoration:"none"}}> Contacto </NavLink>
    </div>
  )
}

export default Navbar