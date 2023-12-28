import React from 'react'
import { NavLink } from 'react-router-dom'


function BannerContact() {
  return (
    <div>
        <div>
            <h3>¿Querés contactarte con nosotros?</h3>
            <NavLink to="/contact"><button>CONTACTANOS</button></NavLink>
        </div>
    </div>
  )
}

export default BannerContact