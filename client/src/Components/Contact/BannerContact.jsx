import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { ImArrowRight } from "react-icons/im";

function BannerContact() {
  return (
    <div className='flex '>
        <div className='flex flex-col md:flex-row md:gap-20 justify-center bg-orange-200 h-full w-full md:h-[100px]  px-4 pb-8 items-center text-center '>
          <div className='flex md:flex-row flex-col justify-center items-center md:gap-14'>
            <h3 className='md:text-3xl font-semibold text-xl'>¿Querés contactarte con nosotros?  </h3>
            <ImArrowRight size={30} className='animate-shake animate-infinite animate-duration-1000 animate-delay-1000 animate-ease-linear'/>
          </div>
            <NavLink to="/contact"><button className='text-lg bg-[#be8552] hover:bg-[#9c6d44] rounded-md font-semibold  text-black py-2 px-3'>CONTÁCTANOS</button></NavLink>
        </div>
    </div>
  )
}

export default BannerContact