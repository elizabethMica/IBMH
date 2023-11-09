import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <NavLink to="/" style={{textDecoration:"none"}}> Logo </NavLink>
      <NavLink to="/sermones" style={{textDecoration:"none"}}> Sermones </NavLink>
      <NavLink to="/about" style={{textDecoration:"none"}}> Nosotros </NavLink>
      <NavLink to="/contact" style={{textDecoration:"none"}}> Contacto </NavLink>
    </div>
  )
}

export default Navbar