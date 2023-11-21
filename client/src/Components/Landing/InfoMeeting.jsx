import React from 'react'
import {Link} from 'react-router-dom'
import {BiChurch} from 'react-icons/bi'
import {FaLocationDot, FaChurch} from 'react-icons/fa6'
import { MdOpenInNew } from "react-icons/md";

function InfoMeeting() {

  const mapsLink = "https://maps.app.goo.gl/ofYdrW9GDmyXzmsp6"

  return (
    <>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#be8552" fill-opacity="1" d="M0,128L34.3,122.7C68.6,117,137,107,206,106.7C274.3,107,343,117,411,149.3C480,181,549,235,617,229.3C685.7,224,754,160,823,144C891.4,128,960,160,1029,176C1097.1,192,1166,192,1234,192C1302.9,192,1371,192,1406,192L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg> */}

    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#be8552" fill-opacity="1" d="M0,224L288,96L576,96L864,128L1152,0L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path></svg> */}

    <section className='bg-[#bdbdbd73]  px-8 my-8 md:my-12 py-16'>
        <div className='flex flex-col justify-center md:flex-row md:justify-evenly'>
        <div className='flex flex-col justify-center items-center '>
          <FaChurch size={30} className='mb-2' />
          <h3 className='text-lg font-bold text-center'>Reunión general:</h3>
          <h3 className='text-xl font-bold text-center text-[#443426]'>Domingo 10:30hs</h3>
        </div>

        <div className='flex flex-col justify-center items-center mt-6'>
          <FaLocationDot size={30} className='mb-2'/>
          <Link to={mapsLink} target="_blank">
            <h3 className='text-lg font-bold text-center'>Ubicación:</h3>
            <h3 className='text-xl font-bold text-center text-[#443426]'>Schumann 2334, Hurlingham, Buenos Aires</h3>
          </Link>
          <Link to={mapsLink} target="_blank">
            <MdOpenInNew size={15} />
          </Link>
        </div>

        </div>
      
    </section>

    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#be8552" fill-opacity="1" d="M0,256L240,288L480,256L720,96L960,256L1200,192L1440,160L1440,0L1200,0L960,0L720,0L480,0L240,0L0,0Z"></path></svg> */}

    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#be8552" fill-opacity="1" d="M0,128L34.3,122.7C68.6,117,137,107,206,106.7C274.3,107,343,117,411,149.3C480,181,549,235,617,229.3C685.7,224,754,160,823,144C891.4,128,960,160,1029,176C1097.1,192,1166,192,1234,192C1302.9,192,1371,192,1406,192L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg> */}
   
    </>
  )
}

export default InfoMeeting