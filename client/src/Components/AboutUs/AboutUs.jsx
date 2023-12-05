import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '/logoWhite.png'
import LastFourSermonCard from '../Sermon/LastFourSermonCard'
import FAQ from './FAQ'

function AboutUs() {

  useEffect(()=>{
  window.scrollTo(0,0)
  },[])

  return (
    <>
    <div className='bgImage2 h-80 w-full md:h-[280px] object-scale-down mt-20 flex justify-center items-center'>
     <img src={logo} className='h-60 w-60'/>
    </div>
    <div className='flex justify-center items-center mt-6'>
      <h1 className='md:text-3xl text-2xl underline decoration-[#be8552] font-semibold'>¿En qué creemos?</h1>
    </div>
   <div className='p-4 bg-gray-200 md:mx-32 mx-8 my-4 md:my-12 rounded-lg'>
    <FAQ/>
   </div>

    <LastFourSermonCard/>
    <div className='flex justify-center items-center mb-4'>
            <NavLink to='/sermones'><button className='text-lg rounded-lg bg-[#be8552] border-2 border-[#be8552] px-4 my-4' >Ver más sermones...</button></NavLink>
          </div>
    </>
  )
}

export default AboutUs