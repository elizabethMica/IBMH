import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/logoWhite.png'
import LastFourSermonCard from '../Sermon/LastFourSermonCard'

function AboutUs() {

  useEffect(()=>{
  window.scrollTo(0,0)
  },[])

  //underline decoration-[#be8552]
  return (
    <>
    <div className='bgImage2 h-80 w-full md:h-[280px] object-scale-down mt-20 flex justify-center items-center'>
     <img src={logo} className='h-60 w-60'/>
    </div>

    <div className='flex flex-col justify-center items-center my-6'>
      {/* <h3 className='text-2xl md:text-3xl font-semibold underline decoration-[#be8552]'>La Iglesia</h3>
      <p className='text-lg p-6 md:px-28 md:text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur non qui at cupiditate quasi sapiente similique libero dolore quisquam. Unde, nobis voluptate magnam illo architecto praesentium voluptatum exercitationem corporis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat obcaecati exercitationem, fugit labore, debitis illo aperiam amet id eius eum, consequatur hic quia distinctio quae tempora non. Molestias, molestiae sapiente!</p> */}

      <h3 className='text-2xl md:text-3xl font-semibold '>Las escrituras</h3>
      <p className='text-lg p-6 md:px-28 md:text-start text-justify'>Creemos que la totalidad de la Biblia, los 39 libros del AT y los 27 del NT, es la inspirada revelación del Señor a su pueblo y que hombres designados por Dios fueron movidos por el Espíritu Santo para escribir cada una de sus palabras. Creemos que la Biblia, en sus escritos originales, no contiene error alguno y que, a través de los siglos, Dios mismo la ha preservado en forma sobrenatural. 
      <br/>
      Creemos que la Biblia es la UNICA regla autoritativa para la fe y la práctica cristiana, la cual provee estímulo, guía, consuelo y enseñanza para la instrucción en justicia (2Ti 3:16-17; 2Pe.1:20-21; Sal 19 y 119).</p>

      <h3 className='text-2xl md:text-3xl font-semibold '>Acerca de las escrituras</h3>
      <p className='text-lg p-6 md:px-28 md:text-start text-justify'>Creemos que la totalidad de la Biblia, los 39 libros del AT y los 27 del NT, es la inspirada revelación del Señor a su pueblo y que hombres designados por Dios fueron movidos por el Espíritu Santo para escribir cada una de sus palabras. Creemos que la Biblia, en sus escritos originales, no contiene error alguno y que, a través de los siglos, Dios mismo la ha preservado en forma sobrenatural. 
      <br/>
      Creemos que la Biblia es la UNICA regla autoritativa para la fe y la práctica cristiana, la cual provee estímulo, guía, consuelo y enseñanza para la instrucción en justicia (2Ti 3:16-17; 2Pe.1:20-21; Sal 19 y 119).</p>
    </div>
    <LastFourSermonCard/>
    <div className='flex justify-center items-center mb-4'>
            <NavLink to='/sermones'><button className='text-lg rounded-lg bg-[#be8552] border-2 border-[#be8552] px-4 my-4' >Ver más sermones...</button></NavLink>
          </div>
    </>
  )
}

export default AboutUs