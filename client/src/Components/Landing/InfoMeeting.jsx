import React from 'react'
import {BiChurch} from 'react-icons/bi'
import {FaLocationDot, FaChurch} from 'react-icons/fa6'

function InfoMeeting() {
  return (
    <div className='bg-red-500'>
      <FaChurch size={50}/>
      <FaLocationDot size={50}/>
    </div>
  )
}

export default InfoMeeting