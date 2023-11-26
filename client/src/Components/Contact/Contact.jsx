import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import FormContact from './FormContact'
import InfoMeeting from '../Landing/InfoMeeting.jsx'
import {FaYoutube} from 'react-icons/fa6'
import {BsSpotify} from 'react-icons/bs'

function Contact() {

  const youtubeLink = 'https://www.youtube.com/@ibmhurlingham879'
  const spotifyLink = 'https://open.spotify.com/show/2u3WpNOhXByNh9ifTLlgCQ?si=9452c98f2180480e'

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  return (
    <div className='mt-20'>
        <InfoMeeting/>
      <div>
        {/* <img src={mapa} alt="Schumann 2334, Hurlingham"/> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.604622047778!2d-58.64995482427317!3d-34.58886955671411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbfb4a6a7a6dd%3A0x563ff2a2cb47863f!2sIglesia%20Bautista%20Misionera%20de%20Hurlingham!5e0!3m2!1ses-419!2sar!4v1701041540838!5m2!1ses-419!2sar" 
       
        className="border-none w-full h-96" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>

        <div>
          <h3 className='font-semibold text-lg m-8 text-center'>También puedes acceder al contenido de la iglesia en:</h3>
          <div className='flex flex-row justify-center items-center'>
            <BsSpotify size={30} className='mx-4' color={"#00e461"}/>
            <FaYoutube size={30} className='mx-4' color={"bb0000"}/>
          </div>
        </div>
      </div>
      <FormContact/>
    </div>
  )
}

export default Contact


// h-[260px] w-[400px] 