import React from 'react'
import {Link} from 'react-router-dom'
import {FaLocationDot, FaChurch,FaYoutube} from 'react-icons/fa6'
import {MdEmail} from 'react-icons/md'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsSpotify} from 'react-icons/bs'


function InfoMeeting() {

  const mapsLink = "https://maps.app.goo.gl/ofYdrW9GDmyXzmsp6"
  const facebookLink = 'https://facebook.com/ibmhurlingham/'
  const youtubeLink = 'https://www.youtube.com/@ibmhurlingham879'
  const spotifyLink = 'https://open.spotify.com/show/2u3WpNOhXByNh9ifTLlgCQ?si=9452c98f2180480e'



  return (
 

    <section className=' flex justify-center items-center '>
      <div className='flex flex-col md:flex-row justify-center bgImage bg-gradient-to-t from-orange-200 to-white h-full w-full md:h-[400px] py-16 object-center object-none'>

      <div className='flex flex-col  px-8 md:gap-10 md:justify-center md:items-start'>

        <div className='flex flex-col md:flex-row justify-center items-center md:items-start md:mx-8'>
          <FaChurch size={30} color={"black"} className='mb-2 md:mb-0 md:mx-2' />
          <h3 className='text-xl font-semibold text-center text-black'>Domingo 10:30hs</h3>
        </div>

        <div className='flex flex-col md:flex-row justify-start items-center md:items-start mt-6 md:mt-0 md:mx-8'>
          <FaLocationDot size={30} color={"black"} className='mb-2 md:mb-0 md:mx-2'/>
          <Link to={mapsLink} target="_blank">
            <h3 className='text-xl font-semibold text-center text-black'>Schumann 2334, Hurlingham</h3>
          </Link>
         
        </div>

        <div className='flex flex-col md:flex-row justify-start items-center md:items-start mt-6 md:mt-0 md:mx-8'>
           <MdEmail size={30} color={"black"} className='mt-2 md:mt-0 md:mx-2' />
         <a href="mailto:ibmhurlingham@gmail.com">
           <h3 className='text-xl font-semibold text-center text-black'>ibmhurlingham@gmail.com</h3>
          </a>
        </div>

        </div>
        <div className='justify-center flex flex-col items-center md:border-l-2 md:border-white md:px-8 '>
          <h3 className='font-semibold md:text-xl text-md md:mx-6 md:mt-0 mx-8 mt-4 py-8 md:pt-0 text-center '>También puedes acceder al contenido de la iglesia en</h3>
          <div className='flex flex-row  justify-center items-center'>
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