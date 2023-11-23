import React, { useEffect } from 'react'
import FormContact from './FormContact'

function Contact() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  return (
    <div className='md:mx-8 py-20'>
      <div>
        
      </div>
      <h1 className='mx-8'>acá poner la informacion de contacto, como llegar y formulario para que llenen con un mensaje y su info que luego va al admin</h1>

      <FormContact/>
    </div>
  )
}

export default Contact