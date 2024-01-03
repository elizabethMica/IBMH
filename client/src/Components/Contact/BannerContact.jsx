import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { ImArrowRight } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";

function BannerContact() {
  return (
    <div className='flex '>
        <div className='flex flex-col  md:gap-4 justify-center bg-gradient-to-t from-orange-200 to-white h-full w-full md:h-[200px]  px-4  py-8 items-center text-center '>
          <div className='flex md:flex-row flex-col justify-center items-center md:gap-14'>
            <h3 className='md:text-3xl font-semibold text-xl'>¿Querés contactarte con nosotros?  </h3>
            {/* <ImArrowDown size={30} className='animate-shake animate-infinite animate-duration-1000 animate-delay-1000 animate-ease-linear '/> */}
          </div>
            <NavLink to="/contact"><button className='text-lg bg-[#be8552] hover:bg-[#9c6d44] rounded-md font-semibold  text-black py-2 px-3'>CONTÁCTANOS</button></NavLink>
        </div>
    </div>
  )
}

export default BannerContact