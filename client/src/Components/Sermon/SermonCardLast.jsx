import React from 'react'
import { NavLink } from 'react-router-dom'

function SermonCardLast(Props) {
  return (
    <>
    <div className='mx-8 flex flex-col md:flex-row'>
     <div className='md:w-1/2'>
        <h3 className='text-xl font-bold text-center md:text-start '>Sermón del Domingo {Props.date}</h3>
        <NavLink to={`/sermon/${Props.id}`}>
            <img src={Props.cover} alt={`Imagen del sermon ${Props.title}`} className='rounded-lg'/>
        </NavLink>
     </div>
     <div className='flex flex-col justify-center md:w-1/2 md:mx-6' > 
        <h3 className='text-lg border-b-2  border-gray-300'>{Props.title}</h3>
        <h5 className='text-sm'>{Props.verse}</h5>
        <p className='truncate'>{Props.description}</p>
        <NavLink to={`/sermon/${Props.id}`}><button className='rounded-lg bg-[#be8552] border-2 border-[#be8552] px-2 my-2'>Escuchar</button></NavLink>
     </div>
    </div>
    </>
  )
}

export default SermonCardLast