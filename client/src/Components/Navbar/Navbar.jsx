import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Logo</NavLink>
      <NavLink to="/sermones">Sermones</NavLink>
      <NavLink to="/about">Nosotros</NavLink>
      <NavLink to="/contact">Contacto</NavLink>
    </div>
  )
}

export default Navbar