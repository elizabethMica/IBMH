import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import logoibm from '/logoibm.png'
import logoWhite from '/logoWhite.png'
import {BiChurch} from 'react-icons/bi'
import {FaLocationDot, FaYoutube} from 'react-icons/fa6'
import {MdEmail} from 'react-icons/md'
import {BsSpotify} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'

function Footer() {

  const youtubeLink = 'https://www.youtube.com/@ibmhurlingham879'
  const spotifyLink = 'https://open.spotify.com/show/2u3WpNOhXByNh9ifTLlgCQ?si=9452c98f2180480e'
  const facebookLink = 'https://facebook.com/ibmhurlingham/'

  return (
    <footer>
      <div className='bg-[#91755d] flex flex-col justify-evenly py-6'>
          <div className='bg-[#91755d] flex flex-col justify-center items-center text-center px-4'>
            <NavLink to='/sermones'><img src={logoWhite} 
              width="70"
              height="70"
              alt="IBM Hurlingham"/>
            </NavLink>
            <div className='bg-[#91755d]'>
              <h3 className='text-lg font-bold text-white'>Iglesia Bautista Misionera Hurlingham</h3>
              <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ex debitis, sunt doloribus dolore iste natus laborum id, hic, ullam odit minima numquam quod recusandae tempore ipsum quis architecto provident?</p>
            </div>
          </div>

        <div className='bg-[#91755d] flex  flex-col justify-center text-center my-4'>
          <h3 className='text-lg font-bold text-white'><NavLink to="/contact">Contacto</NavLink></h3> {/* navlink a contacto */}
          <div className='bg-[#91755d] flex flex-col mx-4 text-white'>
              <div className=' flex flex-row justify-center'>
                <BiChurch color={'white'} size={20} className='mx-2'/> Reunión general: Domingo 10:30hs
              </div>
              <div className=' flex flex-row justify-center'>
                <FaLocationDot color={'white'} size={20} className='mx-2'/> Schumann 2334, Hurlingham, Buenos Aires
              </div>
              <div className=' flex flex-row justify-center'>
                <MdEmail color={'white'} size={20} className='mx-2'/> ibmhurlingham@gmail.com
              </div>
          </div>
        </div>
      
        <div className='bg-[#91755d] flex  flex-col justify-center text-center my-4'>
          <h3 className='text-lg font-bold text-white'>Redes Sociales</h3>
          <div className='bg-[#91755d] flex flex-col mx-4 text-white justify-center items-center text-center'>
              <div className='flex flex-row justify-center '>
                <FaYoutube color={'white'} size={20} className='mx-2'/>
                <NavLink to={youtubeLink} target="_blank"> IBM Hurlingham Iglesia Bautista</NavLink> 
              </div>
              <div className='flex flex-row justify-center ' >
                <BsSpotify color={'white'} size={20} className='mx-2' /> 
                <NavLink to={spotifyLink} target="_blank">IBM Hurlingham</NavLink>
              </div>
              <div className='flex flex-row justify-center ' >
                <FaFacebookSquare color={'white'} size={20} className='mx-2'/> 
                <NavLink to={facebookLink} target="_blank">Iglesia Bautista Misionera Hurlingham </NavLink>
              </div>
          </div>
        </div>

      </div>
      
  </footer>
  )
}

export default Footer

{/* 
FaLocationDot

BiChurch

MdEmail

BsSpotify

FaYoutube

FaFacebookSquare
*/}