import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/logoWhite.png'
import LastFourSermonCard from '../Sermon/LastFourSermonCard'

function AboutUs() {

  useEffect(()=>{
  window.scrollTo(0,0)
  },[])

  return (
    <>
    <div className='bgImage2 h-80 w-full md:h-[280px] object-scale-down mt-20 flex justify-center items-center'>
     <img src={logo} className='h-60 w-60'/>
    </div>

    <div className='flex flex-col justify-center items-center my-6'>
      <h3 className='text-2xl md:text-3xl font-semibold underline decoration-[#be8552]'>La Iglesia</h3>
      <p className='text-lg p-6 md:px-28 md:text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur non qui at cupiditate quasi sapiente similique libero dolore quisquam. Unde, nobis voluptate magnam illo architecto praesentium voluptatum exercitationem corporis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat obcaecati exercitationem, fugit labore, debitis illo aperiam amet id eius eum, consequatur hic quia distinctio quae tempora non. Molestias, molestiae sapiente!</p>

      <h3 className='text-2xl md:text-3xl font-semibold underline decoration-[#be8552]'>Declaración de Fe</h3>
      <p className='text-lg p-6 md:px-28 md:text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur non qui at cupiditate quasi sapiente similique libero dolore quisquam. Unde, nobis voluptate magnam illo architecto praesentium voluptatum exercitationem corporis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat obcaecati exercitationem, fugit labore, debitis illo aperiam amet id eius eum, consequatur hic quia distinctio quae tempora non. Molestias, molestiae sapiente!</p>
    </div>
    <LastFourSermonCard/>
    <div className='flex justify-center items-center mb-4'>
            <NavLink to='/sermones'><button className='text-lg rounded-lg bg-[#be8552] border-2 border-[#be8552] px-4 my-4' >Ver más sermones...</button></NavLink>
          </div>
    </>
  )
}

export default AboutUs