import React from 'react'
import { NavLink, Link } from 'react-router-dom';
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
      <div className='bg-[#443426] flex flex-col justify-evenly p-6 md:flex-row md:items-start'>
            <div className='flex justify-center items-center md:items-start'>
              <NavLink to='/'><img src={logoWhite} 
                width="80"
                height="80"
                alt="IBM Hurlingham"/>
              </NavLink>
            </div>
        <div className='bg-[#443426] flex flex-col justify-center items-center text-center px-4 md:w-72 md:text-start'>
            <div className='bg-[#443426]'>
              <h3 className='text-lg  text-white'>Iglesia Bautista Misionera</h3>
              <p className='text-white text-center md:text-start px-10 md:px-0 pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ex debitis, sunt doloribus dolore iste natus laborum id, hic, ullam odit minima numquam quod recusandae tempore ipsum quis architecto provident?</p>
            </div>
            <h5 className='text-sm  text-gray-400 md:py-4  py-2'><NavLink to="/about" className={"hover:text-[#bd8351]"}>Conoce más acerca de la iglesia AQUÍ</NavLink></h5>
          </div>

        <div className='bg-[#443426] flex  flex-col justify-center md:items-start text-center my-4 md:my-0 md:text-start'>
          <h3 className='text-lg  text-white md:pb-4  pb-2'><NavLink to="/contact">Contacto</NavLink></h3> {/* navlink a contacto */}
          <div className='bg-[#443426] flex flex-col mx-4 text-white md:items-start md:m-0'>
              <div className=' flex flex-row justify-center md:pb-4 text-start pb-2'>
                <BiChurch color={'white'} size={20} className='mx-2'/> Reunión general: Domingo 10:30hs
              </div>
              <div className=' flex flex-row justify-center md:pb-4 md:text-start text-center pb-2'>
                <FaLocationDot color={'white'} size={20} className='md:mx-2 mx-0'/> Schumann 2334, Hurlingham, Buenos Aires
              </div>
              <div className=' flex flex-row justify-center text-start'>
                <MdEmail color={'white'} size={20} className='mx-2'/> ibmhurlingham@gmail.com
              </div>
          </div>
          
        </div>
      
        <div className='bg-[#443426] flex  flex-col justify-center text-center my-4 md:my-0 md:text-start'>
          <h3 className='text-lg  text-white md:pb-4 pb-2'>Redes Sociales</h3>
          <div className='bg-[#443426] flex flex-col mx-4 text-white justify-center items-center text-center md:items-start md:m-0'>
              <div className='flex flex-row justify-center md:pb-4 text-start pb-2'>
                <FaYoutube color={'white'} size={20} className='mx-2'/>
                <NavLink to={youtubeLink} target="_blank"> IBM Hurlingham Iglesia Bautista</NavLink> 
              </div>
              <div className='flex flex-row justify-center md:pb-4 text-start pb-2' >
                <BsSpotify color={'white'} size={20} className='mx-2' /> 
                <NavLink to={spotifyLink} target="_blank">IBM Hurlingham</NavLink>
              </div>
              <div className='flex flex-row justify-center  text-start pb-2' >
                <FaFacebookSquare color={'white'} size={20} className='mx-2'/> 
                <NavLink to={facebookLink} target="_blank">Iglesia Bautista Misionera Hurlingham </NavLink>
              </div>
          </div>
          <NavLink to="/contact" className={"lg:mt-16 mt-4 lg:self-end self-center"}><button className='text-lg bg-blue-700 rounded  text-white p-2'>Contáctanos</button></NavLink>
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