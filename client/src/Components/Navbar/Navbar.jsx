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
    <nav className='w-full fixed z-10 top-0 left-0'>
      <div className='md:px-10 py-4 px-7 md:flex justify-between items-center bg-[#ffffff]'>
         {/* logo section */}
        <div className='flex flex-row cursor-pointer items-center gap-1'>
          <NavLink to="/">
            <img
              src={bookLogo}
              width="40"
              height="40"
              title="Iglesia Bautista Misionera Hurlingham"
              alt="Iglesia Bautista Misionera Hurlingham"
            />
          </NavLink>
          </div>

            <div onClick={()=> setIsOpen(!isOpen)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                  isOpen ? 
                  <FaXmark size={20} color={'#000'}/>
                  :
                  <AiOutlineMenu size={20} color={'#000'}/>
                }
             </div>


              <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#fff] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}`}>
              {
                Links.map(l =>(
                  <li key={l.name} className='font-sansRegular my-7 md:my-0 md:ml-8 text-[#000000]' onClick={()=> setIsOpen(!isOpen)}><NavLink className='hover:border-b-2 hover:border-[#000000]' to={l.link}>{l.name}</NavLink></li>
                ))
              }
              </ul>
        </div>
    </nav>
  )
}

export default Navigation