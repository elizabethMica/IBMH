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

      <h3 className='text-2xl md:text-3xl font-semibold '>Dios el Espiritu Santo</h3>
      <p className='text-lg p-6 md:px-28 md:text-start text-justify'>
      Creemos que el Espíritu Santo vino a morar en las personas el día de Pentecostés, especialmente para glorificar a Jesucristo y regenerar a los hombres para que se apropiaran de la salvación.
      <br/>
      Creemos que es el encargado de traer convicción de pecado, juicio y justicia de Cristo en el corazón del hombre. Creemos que junto con la salvación, Él imparte vida nueva; bautiza al creyente dentro del cuerpo de Cristo, que es la iglesia; pasa a habitar en forma permanente dentro del creyente y le sella asegurándole como propiedad de Dios hasta el día de la redención. 
      <br/>
      Creemos que Él llena y controla a aquellos creyentes que se someten a la Palabra de Dios y que los capacita para que fructifiquen y para que lleven una vida libre del control del pecado. Creemos que Él imparte dones espirituales a los creyentes con el propósito de edificar la iglesia y de dar gloria al nombre de Dios (1Co 13:8, 14:22; Jn 15:1, 16:7; 1Co 6:19, 12:13; Ef 1:13-14, 4:30; Ga 5:16-17, 22-23; Ro 8:5-13).
      </p>

      <h3 className='text-2xl md:text-3xl font-semibold '>El hombre</h3>
      <p className='text-lg p-6 md:px-28 md:text-start text-justify'>
      Creemos que el Hombre es un ser creado y que no llegó a existir como el producto de una evolución, sino que su existencia se debe a un acto creador de la voluntad soberana y omnipotente de Dios.
      <br/>
      Creemos que el hombre fue diseñado para dar gloria, adorar, servir y deleitarse en Dios. Creemos que la desobediencia en Edén fue la causa de su caída en pecado, lo cual trajo como consecuencia la muerte física, espiritual y eterna. Creemos que el hombre ha quedado destituido de la gloria de Dios.
      <br/>
      Creemos que cada aspecto de su naturaleza (mente, emociones y voluntad) ha sido corrompido por su pecado y que está totalmente perdido, muerto, depravado y es incapaz de salvarse a sí mismo, ya que sus propios méritos u obras son insuficientes para poder satisfacer la justicia de Dios (Gn 1:26, 2:6, 17, 3:17-24; Is 59:1-2 , Ro 3:9-19, 23, 5:6-8 , Lc 18:2-27; Ga 2:21; Ef 2:1-3).
      </p>

      <h3 className='text-2xl md:text-3xl font-semibold '>El destino eterno del hombre</h3>
      <p className='text-lg p-6 md:px-28 md:text-start text-justify'>
      Creemos que, al momento de morir, todo creyente, en forma inmediata y conciente, experimenta la presencia y compañía del Señor, para esperar la resurrección física y la glorificación de su cuerpo.
      <br/>
      Creemos que el creyente gozará de la vida eterna, sin presencia de pecado, en compañía de Dios, adorándole y sirviéndole por siempre (2Co 5:6; 1Co 15:12-58; 1Ts 4:13-18; Ap 21 y 22).
      <br/>
      Creemos que, al morir, todo aquel que no creyó en Cristo quedará, en forma inmediata y conciente, separado de la presencia del Señor, esperando la resurrección física de su cuerpo destinado a juicio, condenación y castigo eterno (Lc 16:19-31; Jn 3:18 y 36; 2 Ts 1:5-10; Ap 20:5 y 20:11-15).
      </p>

      <h3 className='text-2xl md:text-3xl font-semibold '>La salvación</h3>
      <p className='text-lg p-6 md:px-28 md:text-start text-justify'>
      Creemos que la sangre derramada por Cristo en la cruz provee la base para el perdón de los pecados, la regeneración y la obtención de la salvación, la cual es el don gratuito de la gracia de Dios al que cree.
      <br/>
      Creemos que la salvación es efectuada por la obra regeneradora del Espíritu Santo y no puede obtenerse mediante las obras o los méritos humanos.
      <br/>
      Creemos que la única forma de apropiarse de ella es colocando la fe en el sacrificio expiatorio de Cristo en la cruz y en su gloriosa resurrección testificada por los apóstoles y su tumba vacía.
      <br/>
      Creemos que el arrepentimiento o “cambio de mente” que nos impulsa a alejarnos del pecado para acercarnos a Cristo es un don de Dios y que forma parte de la fe salvadora, la cual creemos que es también un don de Dios.
      <br/>
      Creemos que aquellos que colocan su fe en Jesucristo son nacidos de nuevo, sus pecados les son perdonados, vienen a ser hijos de Dios, son sellados por el Espíritu Santo para el día de la redención y son eternamente salvados por el poder de Dios. ¡Una vez salvo, siempre salvo!
      <br/>
      Por eso amamos y predicamos las cinco solas de la reforma: “sola Escritura, sola gracia, sola fe, solo Cristo y solo a Dios la gloria” (Ef 1:7; Jn 1:12-13; 3:1-7 y 14-16; 2Co 5:17; Ro 1:16, 10:9-10, Ef 2:1-10; Ro 8:14-17 y 30-39; Jn 10:27-29, 14:6; Hch 26:20; 1P 1:3-5).
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