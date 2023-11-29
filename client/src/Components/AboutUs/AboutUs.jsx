import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
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

   

    <div className='flex flex-col justify-center items-center my-6 md:mx-20'>
      {/* <h3 className='text-2xl md:text-3xl font-semibold underline decoration-[#be8552]'>La Iglesia</h3>
      <p className='text-lg p-6 md:px-28 md:text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur non qui at cupiditate quasi sapiente similique libero dolore quisquam. Unde, nobis voluptate magnam illo architecto praesentium voluptatum exercitationem corporis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat obcaecati exercitationem, fugit labore, debitis illo aperiam amet id eius eum, consequatur hic quia distinctio quae tempora non. Molestias, molestiae sapiente!</p> */}
      
      <h3 className='text-2xl md:text-3xl font-semibold ' >LAS ESCRITURAS</h3>
      <p className='text-lg p-6 md:px-28 md:text-start text-justify'>Creemos que la totalidad de la Biblia, los 39 libros del AT y los 27 del NT, es la inspirada revelación del Señor a su pueblo y que hombres designados por Dios fueron movidos por el Espíritu Santo para escribir cada una de sus palabras. Creemos que la Biblia, en sus escritos originales, no contiene error alguno y que, a través de los siglos, Dios mismo la ha preservado en forma sobrenatural. 
      <br/>
      <br/>
      Creemos que la Biblia es la UNICA regla autoritativa para la fe y la práctica cristiana, la cual provee estímulo, guía, consuelo y enseñanza para la instrucción en justicia.
      <br/> 
      <br/>(2Ti 3:16-17; 2Pe.1:20-21; Sal 19 y 119).</p>
      

      
      <h3 className='text-2xl md:text-3xl font-semibold '>LA TRINIDAD</h3>
      <p className='text-lg p-6 md:px-28 md:text-start text-justify'>Creemos en un solo Dios que existe eternamente en tres personas (el Padre, el Hijo y el Espíritu Santo).
      <br/>
      <br/>
      Creemos que cada una de las personas es totalmente Dios, que poseen toda la naturaleza y atributos de la Deidad, y que son totalmente dignas de nuestra confianza, adoración, servicio y reverencia. 
      <br/>
      <br/>(Dt 6:4; Mt 28:19; Jn 1:14, 10:30; 2Co 13:14).</p>
      

      <h3 className='text-2xl md:text-3xl font-semibold '>DIOS EL PADRE</h3>
      <p className='text-lg p-6 md:px-28 md:text-start text-justify'>Creemos que el Padre es eterno, inmutable, todopoderoso, omnisciente, omnipresente, amor, justo, perfectamente santo, soberano y sustentador del universo que Él mismo ha creado. Creemos que Él es el Padre de nuestro Señor Jesucristo desde la eternidad y de todos los creyentes por adopción.
      <br/> 
      <br/>(Gn 1:1; Ef 4:6; Jn 1:12-13, 5:19-21, 17:1-5; Is 40:21-28, 43:10-13, 46:8-11; Ro 8:14-16).</p>

      <h3 className='text-2xl md:text-3xl font-semibold '>DIOS EL HIJO</h3>
      <p className='text-lg p-6 md:px-28 md:text-start text-justify'>
      Creemos que Jesucristo es el Eterno y Unigénito Hijo de Dios y que se hizo carne para revelar la deidad a los hombres, cumplir las profecías mesiánicas y ser el sacrificio perfecto por los pecados de su pueblo. Creemos que al humanarse, Jesús no dejó de ser Dios, sino que comenzó a ser humano.
      <br/>
      <br/>
      Creemos que a partir de su nacimiento en Belén, Él es totalmente Dios y totalmente hombre, con dos naturalezas inseparablemente unidas en una sola persona por toda la eternidad. Creemos que fue concebido milagrosamente por el Espíritu Santo, nació de María, vivió una vida sin pecado y murió en la cruz como sacrificio expiatorio, suficiente, sustituto por todos los pecados de todos los pecadores de todas las épocas. 
      <br/>
      <br/>
      Creemos que fue sepultado, se levantó en forma corporal de entre los muertos, ascendió al cielo en su cuerpo resucitado y glorioso, está sentado a la derecha de Dios y pronto volverá en el aire a tomar a su novia, la iglesia. 
      <br/>
      <br/>
      Por último, creemos que retornará a la tierra en forma corporal, personal y visible, para consumar el plan eterno de Dios, mediante la introducción de su monarquía terrenal en su reino Mesiánico, el cual será seguido del estado eterno de todas las cosas.
      <br/>
      <br/>
      (Jn 1:1, 14, 18, 3:16; Lc 1:30-35; Fil 2:5-8; Col 2:3-9; Mr 10:45; Hch 2:22-24; Jn 1:29; Ro 3:25-26; Heb 10:5-14; 1 P 2:24, 3:18; Jn 20:20; Fil 3:20-21; Heb 1:3; Rom 8:34; 1Jn 2:1; Hch 1:11; Heb 9:28; 1Ts 4:13-18; 2Ts 2:7; Mt 24:44; Ap 19:11, 21 y 22)
      </p>

      <h3 className='text-2xl md:text-3xl font-semibold ' >DIOS EL ESPIRITU SANTO</h3>
      <p className='text-lg p-6 md:px-28 md:text-start text-justify'>
      Creemos que el Espíritu Santo vino a morar en las personas el día de Pentecostés, especialmente para glorificar a Jesucristo y regenerar a los hombres para que se apropiaran de la salvación.
      <br/>
      <br/>
      Creemos que es el encargado de traer convicción de pecado, juicio y justicia de Cristo en el corazón del hombre. Creemos que junto con la salvación, Él imparte vida nueva; bautiza al creyente dentro del cuerpo de Cristo, que es la iglesia; pasa a habitar en forma permanente dentro del creyente y le sella asegurándole como propiedad de Dios hasta el día de la redención. 
      <br/>
      <br/>
      Creemos que Él llena y controla a aquellos creyentes que se someten a la Palabra de Dios y que los capacita para que fructifiquen y para que lleven una vida libre del control del pecado. Creemos que Él imparte dones espirituales a los creyentes con el propósito de edificar la iglesia y de dar gloria al nombre de Dios.
      <br/>
      <br/>
      (1Co 13:8, 14:22; Jn 15:1, 16:7; 1Co 6:19, 12:13; Ef 1:13-14, 4:30; Ga 5:16-17, 22-23; Ro 8:5-13).
      </p>

      <h3 className='text-2xl md:text-3xl font-semibold '>EL HOMBRE</h3>
      <p className='text-lg p-6 md:px-28 md:text-start text-justify'>
      Creemos que el Hombre es un ser creado y que no llegó a existir como el producto de una evolución, sino que su existencia se debe a un acto creador de la voluntad soberana y omnipotente de Dios.
      <br/>
      <br/>
      Creemos que el hombre fue diseñado para dar gloria, adorar, servir y deleitarse en Dios. Creemos que la desobediencia en Edén fue la causa de su caída en pecado, lo cual trajo como consecuencia la muerte física, espiritual y eterna. Creemos que el hombre ha quedado destituido de la gloria de Dios.
      <br/>
      <br/>
      Creemos que cada aspecto de su naturaleza (mente, emociones y voluntad) ha sido corrompido por su pecado y que está totalmente perdido, muerto, depravado y es incapaz de salvarse a sí mismo, ya que sus propios méritos u obras son insuficientes para poder satisfacer la justicia de Dios.
      <br/>
      <br/>
      (Gn 1:26, 2:6, 17, 3:17-24; Is 59:1-2 , Ro 3:9-19, 23, 5:6-8 , Lc 18:2-27; Ga 2:21; Ef 2:1-3).
      </p>

      <h3 className='text-2xl md:text-3xl font-semibold '>EL DESTINO DEL HOMBRE</h3>
      <p className='text-lg p-6 md:px-28 md:text-start text-justify'>
      Creemos que, al momento de morir, todo creyente, en forma inmediata y conciente, experimenta la presencia y compañía del Señor, para esperar la resurrección física y la glorificación de su cuerpo.
      <br/>
      <br/>
      Creemos que el creyente gozará de la vida eterna, sin presencia de pecado, en compañía de Dios, adorándole y sirviéndole por siempre.
      <br/>
      (2Co 5:6; 1Co 15:12-58; 1Ts 4:13-18; Ap 21 y 22).
      <br/>
      <br/>
      Creemos que, al morir, todo aquel que no creyó en Cristo quedará, en forma inmediata y conciente, separado de la presencia del Señor, esperando la resurrección física de su cuerpo destinado a juicio, condenación y castigo eterno.
      <br/>
      <br/>
      (Lc 16:19-31; Jn 3:18 y 36; 2 Ts 1:5-10; Ap 20:5 y 20:11-15).
      </p>

      <h3 className='text-2xl md:text-3xl font-semibold '>LA SALVACIÓN</h3>
      <p className='text-lg p-6 md:px-28 md:text-start text-justify'>
      Creemos que la sangre derramada por Cristo en la cruz provee la base para el perdón de los pecados, la regeneración y la obtención de la salvación, la cual es el don gratuito de la gracia de Dios al que cree.
      <br/>
      <br/>
      Creemos que la salvación es efectuada por la obra regeneradora del Espíritu Santo y no puede obtenerse mediante las obras o los méritos humanos.
      <br/>
      <br/>
      Creemos que la única forma de apropiarse de ella es colocando la fe en el sacrificio expiatorio de Cristo en la cruz y en su gloriosa resurrección testificada por los apóstoles y su tumba vacía.
      <br/>
      <br/>
      Creemos que el arrepentimiento o “cambio de mente” que nos impulsa a alejarnos del pecado para acercarnos a Cristo es un don de Dios y que forma parte de la fe salvadora, la cual creemos que es también un don de Dios.
      <br/>
      Creemos que aquellos que colocan su fe en Jesucristo son nacidos de nuevo, sus pecados les son perdonados, vienen a ser hijos de Dios, son sellados por el Espíritu Santo para el día de la redención y son eternamente salvados por el poder de Dios. ¡Una vez salvo, siempre salvo!
      <br/>
      <br/>
      Por eso amamos y predicamos las cinco solas de la reforma: “sola Escritura, sola gracia, sola fe, solo Cristo y solo a Dios la gloria”.
      <br/>
      <br/>
      (Ef 1:7; Jn 1:12-13; 3:1-7 y 14-16; 2Co 5:17; Ro 1:16, 10:9-10, Ef 2:1-10; Ro 8:14-17 y 30-39; Jn 10:27-29, 14:6; Hch 26:20; 1P 1:3-5)
      </p>

      <h3 className='text-2xl md:text-3xl font-semibold '>LA VIDA CRISTIANA</h3>
      <p className='text-lg p-6 md:px-28 md:text-start text-justify'>
      Creemos que todo aquel que ha sido salvado por Cristo debe vivir para glorificar al Señor y no para sí mismo, y debe, mediante el poder del Espíritu Santo que mora en él, permitir que la vida de Cristo se manifieste a través de la suya, para promover la gloria de Dios en su congregación y en el mundo.
      <br/>
      <br/>
      Creemos que mediante la diaria obediencia a la Palabra de Dios, cada creyente debe madurar y ser, en forma progresiva, cada vez más parecido a Cristo, lo cual es la meta de su santificación progresiva.
      <br/>
      <br/>
      Creemos que cada creyente debe vivir una vida santa, no satisfacer los deseos de su carne, practicar sus dones espirituales para la edificación de la iglesia, predicar el evangelio de salvación, hacer discípulos, orar por sus hermanos y la salvación de todos los hombres, y llevar fruto en toda buena obra que promueva la gloria de Dios.
      <br/>
      <br/>
      (Ga 2:20; 1P 1:15-16, 2:11; 2Co 5:14-15; Ro 6:11-13; Ef 2:10, 4:11-12, 4:22-24; 1P 4:10-11; Hch 1:8; Mt 28:19-20; Co 1:9-11; Jn 15:4, 8 y 16; 1Ti 2:1-8).
      </p>

      <h3 className='text-2xl md:text-3xl font-semibold '>LA IGLESIA</h3>
      <p className='text-lg p-6 md:px-28 md:text-start text-justify'>
      Creemos que la Iglesia es el cuerpo de Cristo, del cuál Él es la cabeza y todos los creyentes sus miembros.
      <br/>
      <br/>
      Creemos que la “iglesia universal” esta formada por todos los salvados por Cristo desde Pentecostés hasta el Arrebatamiento.
      <br/>
      <br/>
      Creemos que la “iglesia local” es la expresión tangible de la “iglesia universal” porque está formada por los salvados por Cristo que se reúnen en un sitio particular y se organizan para cumplir con los propósitos de Dios.
      <br/>
      <br/>
      Creemos que, al estar unidos en un cuerpo, los creyentes deben vivir en amor, armonía y unidad, no sólo en los asuntos doctrinales sustanciales, sino también en aquellas formas y prácticas que surgen de una sincera y precisa aplicación de la Biblia.
      <br/>
      <br/>
      Creemos que el propósito principal de la iglesia es promover la gloria de Dios, evangelizar a los perdidos y edificar a los salvados.
      <br/>
      <br/>
      (1Co 12:12-27; Ef 1:20-23, 4:1-4; 4:12-16; Mt 28:18-20; Jn 17).
      </p>

      <h3 className='text-2xl md:text-3xl font-semibold '>LAS ORDENANZAS</h3>
      <p className='text-lg p-6 md:px-28 md:text-start text-justify'>
      Creemos que las únicas dos ordenanzas para la iglesia reconocidas en las Escrituras, son el bautismo en agua y la Cena del Señor. Creemos que el bautismo por inmersión es un acto de obediencia que debe realizarse después de la salvación y que describe en forma simbólica la muerte del creyente al pecado, la sepultura del viejo hombre y la resurrección a una nueva vida de obediencia y amor al Señor Jesucristo.
      <br/>
      <br/>
      Creemos que la Cena del Señor celebra el compañerismo y la comunión que tenemos con Cristo y entre los cristianos, y que, en forma simbólica, conmemora su muerte y anticipa su segunda venida a la Tierra.
      <br/>
      <br/>
      (Mt 28:19-20; Hch 8:35-38, 10:47-48; Lc 22:19-20; 1Co 11:23-28; Ro 6:3-4).
      </p>

      <h3 className='text-2xl md:text-3xl font-semibold '>LOS EVENTOS FUTUROS</h3>
      <p className='text-lg p-6 md:px-28 md:text-start text-justify'>
      Creemos que el próximo evento profético a cumplirse es el arrebatamiento de la Iglesia cuando el Señor Jesucristo regrese en las nubes para reunir en sí mismo a todos los creyentes de la era de la iglesia.
      <br/>
      (Jn 14:1-3; 1Co 15:51-52; 1Ts 4:13-18; Fil 3:20-21).
      <br/>
      <br/>
      Creemos que al rapto de la Iglesia le seguirá un período de siete años de tribulación en cumplimiento de la profecía de Daniel (ver Dn 9:24-27), cuya descripción está detallada en el libro de Apocalipsis (ver Ap 6:1 al 19:21).
      <br/>
      <br/>
      Creemos que, en este período de tribulación, Israel será purificado, la ira de Dios desatada contra el pecado y todos los habitantes del mundo probados.
      <br/>(Jer 30:7; Mt 24; Ap 3:10; 1Ts 5:9-11).
      <br/>
      <br/>
      Creemos que, al final de la tribulación, el Señor Jesús regresará en forma física y visible a la Tierra, la misma forma en la que ascendió al cielo con poder y gloria, para ejecutar juicio e introducir su reino Mesiánico, mediante el cual gobernará la tierra en rectitud, justicia y paz, para cumplir sus pactos y promesas para con Israel.
      <br/>(Hch 1:8-11; Ap 19:11-21; Is 11:9; Ap 20:1-6).
      <br/>
      <br/>
      Creemos que el reinado de Cristo en la tierra será seguido del juicio final de Satanás, la segunda resurrección corporal de todos aquellos que no creyeron en Cristo, el juicio final del gran trono blanco, la condenación eterna de los incrédulos en el infierno, la creación de cielos nuevos y tierra nueva, y el estado eterno de todas las cosas.
      <br/>(Ap 20-22; 2P 3:1-14).
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