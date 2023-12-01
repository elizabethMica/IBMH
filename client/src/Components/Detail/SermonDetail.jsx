import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { NavLink, Link } from 'react-router-dom';
import { getDetail} from "../../Redux/actions";
import LastFourSermonCard from "../Sermon/LastFourSermonCard";
import {FacebookShareButton, WhatsappShareButton,  EmailShareButton, TelegramShareButton}  from "react-share"
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";


const SermonDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    

    useEffect(()=>{
      window.scrollTo(0, 0)
      dispatch(getDetail(id))
    },[id])

    
    const detail = useSelector(state => state.detail)
  
    const embed = "https://www.youtube.com/embed/"
    const videoLink = detail?.videoYT?.split("/")[3]
    
  return (
    <div className="pt-24" >
      <div className=" ">
        <h3 className="text-lg font-bold text-center md:text-3xl">{detail?.title}</h3>
        <h5 className="text-sm md:text-lg text-center mb-2 w-full text-gray-500">{detail?.verse} | {detail?.preacher}</h5>
      </div>
          
      <section className="mx-8">
        <div >
            {detail?.videoYT? (
                    <iframe
                    key={detail?.id}
                    src={embed + videoLink }
                    className="w-80 h-48 m-auto md:w-9/12 md:h-[560px]"
                  />    
                ) : <p>El video no es compatible con el celular. Por favor visita el canal de Youtube <Link target="_blank" to="https://www.youtube.com/@ibmhurlingham879" style={{color:"blue"}}>IBM Hurlingham</Link></p> 
            }
        </div>
        <div className="mb-10 mt-4 border-t-2 md:mx-28">
        <p className="mt-2 font-semibold text-sm md:text-lg ">Versículo</p>
        <p className="mt-2 text-justify md:text-start md:text-xl">{detail?.verseText}</p>
        </div>
        {
          detail?.description ? ( <div className="mb-10 mt-4 border-t-2 md:mx-28">
          <p className="mt-2 font-semibold text-sm md:text-lg ">Descripción</p>
          <p className="mt-2 text-justify md:text-start md:text-xl">{detail?.description}</p>
          </div>) : null
        }
        {
          detail?.videoYT ? (
            <div className="flex flex-col justify-center items-center px-4">
              <p className="text-lg font-semibold border-b-2 ">Compartir este sermón</p>
              <div className="gap-4 flex my-4">
               <FacebookShareButton url={detail?.videoYT} children={<FaFacebook size={30} color={"#3b5998"}/>}/>
               <WhatsappShareButton url={detail?.videoYT} children={<RiWhatsappFill size={30} color={"#4dc247"}/>}/>
               <TelegramShareButton url={detail?.videoYT} children={<FaTelegram size={30} color={"#0088cc"}/>}/>
               <EmailShareButton url={detail?.videoYT} children={<MdEmail size={30} color={"#ea4335"}/>}/>
               </div>
            </div>
          ) :null
        }
      </section>

       <LastFourSermonCard />

          <div className='flex justify-center items-center mb-4'>
            <NavLink to='/sermones'><button className='text-lg rounded-lg bg-[#be8552] border-2 border-[#be8552] px-4 my-4' >Ver más sermones...</button></NavLink>
          </div>
        
    </div>
  )
}

export default SermonDetail




