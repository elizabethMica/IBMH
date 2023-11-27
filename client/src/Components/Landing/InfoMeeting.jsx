import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {BiChurch} from 'react-icons/bi'
import {FaLocationDot, FaChurch,FaYoutube} from 'react-icons/fa6'
import { MdOpenInNew } from "react-icons/md";
import {MdEmail} from 'react-icons/md'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsSpotify} from 'react-icons/bs'


function InfoMeeting() {

  const mapsLink = "https://maps.app.goo.gl/ofYdrW9GDmyXzmsp6"
  const facebookLink = 'https://facebook.com/ibmhurlingham/'
  const youtubeLink = 'https://www.youtube.com/@ibmhurlingham879'
  const spotifyLink = 'https://open.spotify.com/show/2u3WpNOhXByNh9ifTLlgCQ?si=9452c98f2180480e'



  return (
 

    <section className=' flex justify-center items-center'>
      <div className='flex flex-col justify-center bgImage bg-gray-300 h-full w-full md:h-[400px] py-16 object-center object-none'>

      <div className='flex flex-col md:flex-row px-8 md:gap-1 md:justify-center'>

        <div className='flex flex-col justify-center items-center md:mx-8'>
          <FaChurch size={30} color={"black"} className='mb-2 md:mb-0 w-24' />
          {/* <h3 className='text-lg font-bold text-center'>Reunión general:</h3> */}
          <h3 className='text-xl font-semibold text-center text-black'>Domingo 10:30hs</h3>
        </div>

        <div className='flex flex-col justify-start items-center mt-6 md:mt-0 md:mx-8'>
          <FaLocationDot size={30} color={"black"} className='mb-2 md:mb-0'/>
          <Link to={mapsLink} target="_blank">
            {/* <h3 className='text-lg font-bold text-center'>Ubicación:</h3> */}
            <h3 className='text-xl font-semibold text-center text-black'>Schumann 2334, Hurlingham, Buenos Aires</h3>
          </Link>
         
        </div>

        <div className='flex flex-col justify-start items-center mt-6 md:mt-0 md:mx-8'>
           <MdEmail size={30} color={"black"} className='mt-2 md:mt-0' />
         <a href="mailto:ibmhurlingham@gmail.com">
           <h3 className='text-xl font-semibold text-center text-black'>ibmhurlingham@gmail.com</h3>
          </a>
        </div>

        </div>
        <div>
          <h3 className='font-semibold text-xl m-8 pt-8 text-center md:text-2xl'>También puedes acceder al contenido de la iglesia en:</h3>
          <div className='flex flex-row justify-center items-center'>
            <Link to={spotifyLink} target="_blank"><BsSpotify size={40} className='mx-4' color={"#00e461"}/></Link>
            <Link to={youtubeLink} target="_blank"><FaYoutube size={40} className='mx-4' color={"bb0000"}/></Link>
            <Link to={facebookLink} target="_blank"><FaFacebookSquare size={40} className='mx-4' color={"#3b5998"}/></Link>
          </div>
      </div>

    </div>
      
    </section>
   
  )
}

export default InfoMeeting