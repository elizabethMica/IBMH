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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.604622047778!2d-58.64995482427317!3d-34.58886955671411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbfb4a6a7a6dd%3A0x563ff2a2cb47863f!2sIglesia%20Bautista%20Misionera%20de%20Hurlingham!5e0!3m2!1ses-419!2sar!4v1701041540838!5m2!1ses-419!2sar" 
       
        className="border-none w-full h-96" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </>
  )
}

export default AboutUs