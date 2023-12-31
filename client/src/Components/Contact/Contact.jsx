import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import FormContact from './FormContact'
import InfoMeeting from '../Landing/InfoMeeting.jsx'
import {FaYoutube} from 'react-icons/fa6'
import {BsSpotify} from 'react-icons/bs'
import { PiCrossFill } from "react-icons/pi";
import LastFourSermonCard from '../Sermon/LastFourSermonCard.jsx'

function Contact() {

  const youtubeLink = 'https://www.youtube.com/@ibmhurlingham879'
  const spotifyLink = 'https://open.spotify.com/show/2u3WpNOhXByNh9ifTLlgCQ?si=9452c98f2180480e'

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  return (
    <div className='mt-20 '>
      <div >
      <div className='flex flex-col md:flex-row md:justify-between justify-center md:items-start items-center bg-[#be845200] md:px-14 '>
        <div className='md:mx-8 bg-[#443426] md:bg-transparent'>
          <h3 className='font-semibold text-2xl pt-8 px-16 md:px-0 md:text-start text-center md:text-4xl md:text-black text-white'>Contáctate con Nosotros!</h3>
          <p className='text-lg py-4 md:text-xl px-4 md:px-0 md:py-0 text-justify md:text-start md:w-[500px]  text-white md:text-black  w-full'>Si tienes alguna duda acerca del evangelio, nuestras reuniones, alguna pregunta o simplemente quieres mandar un mensaje ¡No dudes en hacerlo! Te contactaremos a la brevedad.</p>
        </div>
        
        <FormContact/>
        
       
      </div>
      </div> 
      <InfoMeeting/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.604622047778!2d-58.64995482427317!3d-34.58886955671411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbfb4a6a7a6dd%3A0x563ff2a2cb47863f!2sIglesia%20Bautista%20Misionera%20de%20Hurlingham!5e0!3m2!1ses-419!2sar!4v1701041540838!5m2!1ses-419!2sar" 
       
        className="border-none w-full h-96" 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      <LastFourSermonCard/>

        <div className='flex justify-center items-center mb-4'>
          <NavLink to='/sermones'><button className='text-lg rounded-lg bg-[#be8552] border-2 border-[#be8552] px-4 my-4' >Ver más sermones...</button></NavLink>
        </div>
      
       
    </div>
  )
}

export default Contact


// h-[260px] w-[400px] 