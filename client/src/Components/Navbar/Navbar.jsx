import React, {useState} from 'react'
import { NavLink, Link } from 'react-router-dom'
import bookLogo from '/logoibm.png'
import {AiOutlineMenu} from 'react-icons/ai'
import {FaXmark} from 'react-icons/fa6'

const Navigation = () => {

  let Links =[
    {name: 'Sermones', link: '/sermones'},
    {name: 'Nosotros', link: '/about'},
    {name: 'Contacto', link: '/contact'},
  ]

  const [isOpen, setIsOpen] = useState(false)
  
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