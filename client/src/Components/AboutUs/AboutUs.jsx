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

      <h3 className='text-2xl md:text-3xl font-semibold '>La Trinidad</h3>
      <p className='text-lg p-6 md:px-28 md:text-start text-justify'>Creemos en un solo Dios que existe eternamente en tres personas (el Padre, el Hijo y el Espíritu Santo).
      <br/>
      Creemos que cada una de las personas es totalmente Dios, que poseen toda la naturaleza y atributos de la Deidad, y que son totalmente dignas de nuestra confianza, adoración, servicio y reverencia (Dt 6:4; Mt 28:19; Jn 1:14, 10:30; 2Co 13:14).</p>

      <h3 className='text-2xl md:text-3xl font-semibold '>Dios el Padre</h3>
      <p className='text-lg p-6 md:px-28 md:text-start text-justify'>Creemos que el Padre es eterno, inmutable, todopoderoso, omnisciente, omnipresente, amor, justo, perfectamente santo, soberano y sustentador del universo que Él mismo ha creado. Creemos que Él es el Padre de nuestro Señor Jesucristo desde la eternidad y de todos los creyentes por adopción (Gn 1:1; Ef 4:6; Jn 1:12-13, 5:19-21, 17:1-5; Is 40:21-28, 43:10-13, 46:8-11; Ro 8:14-16).</p>

      <h3 className='text-2xl md:text-3xl font-semibold '>Dios el Hijo</h3>
      <p className='text-lg p-6 md:px-28 md:text-start text-justify'>
      Creemos que Jesucristo es el Eterno y Unigénito Hijo de Dios y que se hizo carne para revelar la deidad a los hombres, cumplir las profecías mesiánicas y ser el sacrificio perfecto por los pecados de su pueblo. Creemos que al humanarse, Jesús no dejó de ser Dios, sino que comenzó a ser humano.
      <br/>
      Creemos que a partir de su nacimiento en Belén, Él es totalmente Dios y totalmente hombre, con dos naturalezas inseparablemente unidas en una sola persona por toda la eternidad. Creemos que fue concebido milagrosamente por el Espíritu Santo, nació de María, vivió una vida sin pecado y murió en la cruz como sacrificio expiatorio, suficiente, sustituto por todos los pecados de todos los pecadores de todas las épocas. 
      <br/>
      Creemos que fue sepultado, se levantó en forma corporal de entre los muertos, ascendió al cielo en su cuerpo resucitado y glorioso, está sentado a la derecha de Dios y pronto volverá en el aire a tomar a su novia, la iglesia. 
      <br/>
      Por último, creemos que retornará a la tierra en forma corporal, personal y visible, para consumar el plan eterno de Dios, mediante la introducción de su monarquía terrenal en su reino Mesiánico, el cual será seguido del estado eterno de todas las cosas.
      <br/>
      Jn 1:1, 14, 18, 3:16; Lc 1:30-35; Fil 2:5-8; Col 2:3-9; Mr 10:45; Hch 2:22-24; Jn 1:29; Ro 3:25-26; Heb 10:5-14; 1 P 2:24, 3:18; Jn 20:20; Fil 3:20-21; Heb 1:3; Rom 8:34; 1Jn 2:1; Hch 1:11; Heb 9:28; 1Ts 4:13-18; 2Ts 2:7; Mt 24:44; Ap 19:11, 21 y 22.
      </p>

      <h3>Dios el Espiritu Santo</h3>
      <p>
      Creemos que el Espíritu Santo vino a morar en las personas el día de Pentecostés, especialmente para glorificar a Jesucristo y regenerar a los hombres para que se apropiaran de la salvación.
      <br/>
      Creemos que es el encargado de traer convicción de pecado, juicio y justicia de Cristo en el corazón del hombre. Creemos que junto con la salvación, Él imparte vida nueva; bautiza al creyente dentro del cuerpo de Cristo, que es la iglesia; pasa a habitar en forma permanente dentro del creyente y le sella asegurándole como propiedad de Dios hasta el día de la redención. 
      <br/>
      Creemos que Él llena y controla a aquellos creyentes que se someten a la Palabra de Dios y que los capacita para que fructifiquen y para que lleven una vida libre del control del pecado. Creemos que Él imparte dones espirituales a los creyentes con el propósito de edificar la iglesia y de dar gloria al nombre de Dios (1Co 13:8, 14:22; Jn 15:1, 16:7; 1Co 6:19, 12:13; Ef 1:13-14, 4:30; Ga 5:16-17, 22-23; Ro 8:5-13).
      </p>
    </div>
    <LastFourSermonCard/>
    <div className='flex justify-center items-center mb-4'>
            <NavLink to='/sermones'><button className='text-lg rounded-lg bg-[#be8552] border-2 border-[#be8552] px-4 my-4' >Ver más sermones...</button></NavLink>
          </div>
    </>
  )
}

export default AboutUs