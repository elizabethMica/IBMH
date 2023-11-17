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
    
      <div className='bg-red-500'>


          <div className='bg-green-500'>
            <NavLink to='/sermones'><img src={logoWhite} 
              width="70"
              height="70"
              alt="IBM Hurlingham"/>
            </NavLink>
            <div className='bg-pink-500'>
              <h3 >Iglesia Bautista Misionera Hurlingham</h3>
              <p>texto...</p>
            </div>
          </div>


        <div className='bg-white'>
          <h4>Contacto</h4> {/* navlink a contacto */}
          <div className='bg-pink-500'>
              <div>
                <BiChurch color={'white'} size={20}/> Reunión general: <strong>Domingos 10:30hs</strong>
              </div>
              <div>
                <FaLocationDot color={'white'} size={20} /> Schumann 2334, Hurlingham, Provincia de Buenos Aires
              </div>
              <div>
                <MdEmail color={'white'} size={20} /> ibmhurlingham@gmail.com
              </div>
          </div>
        </div>
      


     
        <div className='bg-gray-500'>
          <h4>Redes Sociales</h4>
          <div className='bg-pink-500'>
              <div as={Link} to={youtubeLink} >
                <FaYoutube color={'white'} size={20}/> IBM Hurlingham iglesia bautista     
              </div>
              <div as={Link} to={spotifyLink} >
                <BsSpotify color={'white'} size={20} /> IBM Hurlingham
              </div>
              <div as={Link} to={facebookLink} >
                <FaFacebookSquare color={'white'} size={20} /> Iglesia Bautista Misionera Hurlingham
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