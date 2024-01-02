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
      <div className='flex flex-col justify-center  md:gap-8 bg-gradient-to-t from-orange-200 to-white h-full w-full md:h-[380px] '>

          <div className='flex flex-col md:flex-row  px-8 md:gap-10 md:justify-center md:items-start'>

            <div className='flex flex-col  justify-center items-center md:items-center md:mx-8'>
              <FaChurch size={30} color={"black"} className='mb-2 md:mb-0 md:mx-2' />
              <h3 className='md:text-2xl text-xl font-semibold text-center text-black'>Domingo 10:30hs</h3>
            </div>

            <div className='flex flex-col  justify-start items-center md:items-center mt-6 md:mt-0 md:mx-8'>
              <FaLocationDot size={30} color={"black"} className='mb-2 md:mb-0 md:mx-2'/>
              <Link to={mapsLink} target="_blank">
              <h3 className='md:text-2xl text-xl font-semibold text-center text-black'>Schumann 2334, Hurlingham</h3>
              </Link>
            </div>

            <div className='flex flex-col justify-start  items-center md:items-center  mt-6 md:mt-0 md:mx-8'>
              <MdEmail size={30} color={"black"} className='mt-2 md:mt-0 md:mx-2' />
              {/* <h3 className='text-lg font-semibold'>Email</h3> */}
              <a href="mailto:ibmhurlingham@gmail.com">
              <h3 className='md:text-2xl text-xl font-semibold text-center text-black'>ibmhurlingham@gmail.com</h3>
              </a>
            </div>

          </div>

          <div className='justify-center flex flex-col items-center self-center md:pt-4 md:w-[800px]'>
            <h3 className='font-semibold md:text-3xl text-xl md:mx-6 md:mt-0 mx-8 mt-4 py-8 md:pt-0 md:pb-2 text-center '>También puedes acceder al contenido de la iglesia en nuestras redes:</h3>
            <div className='flex flex-row  justify-center items-center md:gap-2 '>
              <Link to={spotifyLink} target="_blank"><BsSpotify size={50} className='mx-4' color={"#00e461"}/></Link>
              <Link to={youtubeLink} target="_blank"><FaYoutube size={60} className='mx-4' color={"bb0000"}/></Link>
              <Link to={facebookLink} target="_blank"><FaFacebookSquare size={50} className='mx-4' color={"#3b5998"}/></Link>
            </div>
          </div>

      </div>
      
    </section>
   
  )
}

export default InfoMeeting