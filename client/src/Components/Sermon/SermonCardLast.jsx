import React from 'react'
import { NavLink } from 'react-router-dom'

function SermonCardLast(Props) {
  return (
    <>
    <div>
     <div>
        <h3>Sermón del Domingo {Props.date}</h3>
        <NavLink to={`/sermon/${Props.id}`}>
            <img src={Props.cover} alt={`Imagen del sermon ${Props.title}`} />
        </NavLink>
     </div>
     <div> 
        <h3>{Props.title}</h3>
        <h5>{Props.verse}</h5>
        <p >{Props.description}</p>
        <NavLink to={`/sermon/${Props.id}`}><button>Escuchar</button></NavLink>
     </div>
    </div>
    </>
  )
}

export default SermonCardLast