import React from 'react'
import { NavLink } from 'react-router-dom'

function SermonCardLast(Props) {
  return (
    <>
    <div className='mx-8 bg-red-400'>
     <div>
        <h3 className='text-xl font-bold text-center md:text-start '>Sermón del Domingo {Props.date}</h3>
        <NavLink to={`/sermon/${Props.id}`}>
            <img src={Props.cover} alt={`Imagen del sermon ${Props.title}`} className='rounded-lg'/>
        </NavLink>
     </div>
     <div className='bg-green-400' > 
        <h3 className=''>{Props.title}</h3>
        <h5>{Props.verse}</h5>
        <p className='truncate'>{Props.description}</p>
        <NavLink to={`/sermon/${Props.id}`}><button>Escuchar</button></NavLink>
     </div>
    </div>
    </>
  )
}

export default SermonCardLast