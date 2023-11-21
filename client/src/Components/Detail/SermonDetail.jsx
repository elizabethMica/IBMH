import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { NavLink, Link } from 'react-router-dom';
import { getAllSermon, getDetail, clearDetail } from "../../Redux/actions";
import SermonCard from "../Sermon/sermonCard";
import LastFourSermonCard from "../Sermon/LastFourSermonCard";

const SermonDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getDetail(id))
    },[dispatch])
    
    const detail = useSelector(state => state.detail)
  
    const embed = "https://www.youtube.com/embed/"
    const videoLink = detail?.videoYT?.split("/")[3]
    
  return (
    <div className="pt-20" >
      <div className="">
        <h3 className="text-lg font-bold text-center">{detail?.title}</h3>
        <h5 className="text-sm text-center mb-2 w-full text-red-700">{detail?.verse}</h5>
      </div>
          
      <section className="mx-8">
        <div >
            {detail?.videoYT? (
                    <iframe
                    key={detail?.id}
                    src={embed + videoLink }
                    className="w-80 h-48 m-auto"
                  />    
                ) : <p>El video no es compatible con el celular. Por favor visita el canal de Youtube <Link target="_blank" to="https://www.youtube.com/@ibmhurlingham879" style={{color:"blue"}}>IBM Hurlingham</Link></p> 
            }
        </div>
        <div className="mb-10 mt-4 border-t-2 ">
        <p className="mt-2 font-semibold text-sm">Descripción</p>
        <p className="mt-2 text-justify">{detail?.description}</p>
        </div>
      </section>

       <LastFourSermonCard />

          <div className='flex justify-center items-center'>
            <NavLink to='/sermones'><button className='text-lg rounded-lg bg-[#be8552] border-2 border-[#be8552] px-4 my-4' >Ver más sermones...</button></NavLink>
          </div>
        
    </div>
  )
}

export default SermonDetail




