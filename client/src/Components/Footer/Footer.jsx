import React from 'react'
import { NavLink } from 'react-router-dom';
import logoWhite from '/logoWhite.png'
import {FaLocationDot, FaYoutube, FaChurch} from 'react-icons/fa6'
import {MdEmail} from 'react-icons/md'
import {BsSpotify} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'
import { MdOpenInNew } from "react-icons/md";

function Footer() {

  const youtubeLink = 'https://www.youtube.com/@ibmhurlingham879'
  const spotifyLink = 'https://open.spotify.com/show/2u3WpNOhXByNh9ifTLlgCQ?si=9452c98f2180480e'
  const facebookLink = 'https://facebook.com/ibmhurlingham/'

  return (
    <footer>
      <div className='bg-[#443426] flex flex-col justify-evenly py-8 px-6 md:flex-row md:items-start'>
            <div className='flex flex-col justify-center items-center '>
              <NavLink to='/'><img src={logoWhite} 
                width="80"
                height="80"
                alt="IBM Hurlingham"/>
              </NavLink>
              <h3 className='text-xl  text-white'>Iglesia Bautista Misionera</h3>
              <p className='text-sm  text-white'>Pastor Diego Velazquez</p>
            </div>

        <div className='bg-[#443426] flex  flex-col justify-center md:items-start text-center my-4 md:my-0 md:text-start'>
          <h3 className='text-lg  text-white md:pb-4  pb-2'><NavLink to="/contact">Contacto</NavLink></h3> {/* navlink a contacto */}
          <div className='bg-[#443426] flex flex-col md:mx-4 text-white md:items-start md:m-0'>
              <div className=' flex flex-row justify-center text-center md:pb-4 md:text-start pb-2'>
                <FaChurch color={'white'} size={20} className='mx-2'/> Reunión general: Domingo 10:30hs
              </div>
              <div className=' flex flex-row justify-center md:pb-4 md:text-start text-center pb-2'>
                <FaLocationDot color={'white'} size={20} className='md:mx-2 mx-1'/> Schumann 2334, Hurlingham, Buenos Aires
              </div>
              <div className=' flex flex-row justify-center text-start'>
                <MdEmail color={'white'} size={20} className='mx-2'/> ibmhurlingham@gmail.com
              </div>
          </div>
          
        </div>
      
        <div className='bg-[#443426] flex  flex-col justify-center text-center my-4 md:my-0 md:text-start'>
          <h3 className='text-lg  text-white md:pb-4 pb-2'>Redes Sociales</h3>
          <div className='bg-[#443426] flex flex-col md:mx-4 text-white justify-center items-center text-center md:items-start md:m-0'>
              <div className='flex flex-row justify-center items-center md:pb-4 md:text-start text-center pb-2'>
                <FaYoutube color={'white'} size={20} className='mx-2'/>
                <NavLink to={youtubeLink} target="_blank"> IBM Hurlingham</NavLink> 
                <MdOpenInNew size={10} className='ml-1'/>
              </div>
              <div className='flex flex-row justify-center items-center md:pb-4 md:text-start text-center pb-2' >
                <BsSpotify color={'white'} size={20} className='mx-2' /> 
                <NavLink to={spotifyLink} target="_blank">IBM Hurlingham</NavLink>
                <MdOpenInNew size={10} className='ml-1'/>
              </div>
              <div className='flex flex-row justify-center items-center md:pb-4 md:text-start text-center pb-2' >
                <FaFacebookSquare color={'white'} size={20} className='mx-2'/> 
                <NavLink to={facebookLink} target="_blank">IBM Hurlingham </NavLink>
                <MdOpenInNew size={10} className='ml-1'/>
              </div>
          </div>
          <NavLink to="/contact" className={"lg:mt-16 mt-4 lg:self-end self-center"}><button className='text-lg bg-[#be8552] hover:bg-[#9c6d44] rounded-md font-semibold  text-white p-2'>CONTÁCTANOS</button></NavLink>
        </div>
      </div>
      <div className='bg-[#443426] justify-center items-center flex pb-4 border-none'>
      <span className='text-gray-400 text-sm text-center '>Iglesia Bautista Misionera Hurlingham - 2023</span>

      </div>
  </footer>
  )
}

export default Footer
