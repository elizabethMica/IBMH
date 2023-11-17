import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import bookLogo from '/logoibm.png'

const Navigation = () => {
  return (
    <>
    <nav>
      <div>
        <NavLink to="/">
          <img
              src={bookLogo}
              width="30"
              height="30"
              alt="Iglesia logo"
            /> Hurlingham
        </NavLink>
          <div >
            <NavLink   to="/sermones">Sermones</NavLink>
            <NavLink   to="/about">Nosotros</NavLink>
            <NavLink   to="/contact">Contacto</NavLink>
          </div>
      </div>
    </nav>
    </>
  )
}

export default Navigation