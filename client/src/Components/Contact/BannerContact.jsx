import React from 'react'
import { NavLink } from 'react-router-dom'


function BannerContact() {
  return (
    <div className='flex '>
        <div className='flex flex-col  justify-center  bgImage bg-orange-200 h-full w-full md:h-[200px]  px-4 items-center text-center '>
            <h3 className='text-2xl font-semibold pb-4'>¿Querés contactarte con nosotros?</h3>
            <NavLink to="/contact"><button className='text-md bg-[#be8552] hover:bg-[#9c6d44] rounded-lg font-semibold  text-black p-2'>CONTÁCTANOS</button></NavLink>
        </div>
    </div>
  )
}

export default BannerContact