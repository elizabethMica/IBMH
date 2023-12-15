import React from 'react'
import { NavLink } from 'react-router-dom'


function SermonCardLast(Props) {

  const day = Props?.date?.split("-")[0]
  const embed = "https://www.youtube.com/embed/"
  const videoLink = Props?.videoYT?.split("/")[3]

  return (
    <>
    <div className='px-8 py-8 md:px-14 md:mx-10 flex flex-col md:flex-row'>
     <div className='md:w-1/2'>
        <h3 className='text-2xl md:text-3xl font-bold text-center md:text-start pb-2'>Sermón del Domingo {day}</h3>
        <NavLink to={`/sermon/${Props.id}`}>
            <img src={Props.cover} alt={`Imagen del sermon ${Props.title}`} className='rounded-lg'/>
        </NavLink>
     </div>
     <div className='flex flex-col justify-center md:w-1/2 md:mx-6 md:px-0' > 
        <h3 className='text-lg font-semibold border-b border-gray-300 md:text-2xl '>{Props.title}</h3>
        <h5 className='text-sm text-gray-500 '>{Props.verse} | {Props.preacher}</h5>
        {/* sacar el truncate y poner una propiedad en el modelo que acepte descripciones cortas */}
        <p className='truncate'>{Props.verseText}</p>
        <NavLink to={`/sermon/${Props.id}`}><button className=' rounded-full font-semibold bg-[#be8552] border-2 border-[#be8552] px-2 my-2 hover:text-white'>Escuchar</button></NavLink>
     </div>
    </div>
    </>
  )
}

export default SermonCardLast