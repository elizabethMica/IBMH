import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {BiChurch} from 'react-icons/bi'
import {FaLocationDot, FaChurch, FaYoutube} from 'react-icons/fa6'
import { MdOpenInNew } from "react-icons/md";
import {MdEmail} from 'react-icons/md'
import {BsSpotify} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'
import cruzPaisaje from '../../assets/pictures/cruz-cristiana-paisaje-natural.jpg'


function InfoMeeting() {

  const mapsLink = "https://maps.app.goo.gl/ofYdrW9GDmyXzmsp6"
  const youtubeLink = 'https://www.youtube.com/@ibmhurlingham879'
  const spotifyLink = 'https://open.spotify.com/show/2u3WpNOhXByNh9ifTLlgCQ?si=9452c98f2180480e'
  const facebookLink = 'https://facebook.com/ibmhurlingham/'


  return (
 

    <section className=' my-8 md:my-12 py-16  flex justify-center items-center'>
      <div className='flex flex-col justify-center bgImage h-80 w-full md:h-[400px] object-center object-none'>

      <div className='flex flex-col md:flex-row px-8 md:gap-1 md:justify-center'>

        <div className='flex flex-col justify-center items-center md:mx-8'>
          <FaChurch size={30} color={"white"} className='mb-2 md:mb-0' />
          {/* <h3 className='text-lg font-bold text-center'>Reunión general:</h3> */}
          <h3 className='text-xl font-semibold text-center text-white'>Domingo 10:30hs</h3>
        </div>

        <div className='flex flex-col justify-start items-center mt-6 md:mt-0 md:mx-8'>
          <FaLocationDot size={30} color={"white"} className='mb-2 md:mb-0'/>
          <Link to={mapsLink} target="_blank">
            {/* <h3 className='text-lg font-bold text-center'>Ubicación:</h3> */}
            <h3 className='text-xl font-semibold text-center text-white'>Schumann 2334, Hurlingham, Buenos Aires</h3>
          </Link>
          <Link to={mapsLink} target="_blank">
            <MdOpenInNew size={15} color={"white"}/>
          </Link>
        </div>

        <div className='flex flex-col justify-start items-center mt-6 md:mt-0 md:mx-8'>
           <MdEmail size={30} color={"white"} className='mt-2 md:mt-0' />
         <a href="mailto:ibmhurlingham@gmail.com">
           <h3 className='text-xl font-semibold text-center text-white'>ibmhurlingham@gmail.com</h3>
          </a>
        </div>
      </div>

    </div>
      
    </section>
   
  )
}

export default InfoMeeting