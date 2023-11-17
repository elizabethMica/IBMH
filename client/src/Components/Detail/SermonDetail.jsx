import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { NavLink } from 'react-router-dom';
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

    console.log(detail)
  
    const embed = "https://www.youtube.com/embed/"
    const videoLink = detail?.videoYT?.split("/")[3]
    
  return (
    <>
    <div >
          <h3>{detail?.title}</h3>
          <h5>{detail?.verse}</h5>
      <section >
        <div >
            {detail?.videoYT? (
                    <iframe
                      key={detail?.id}
                      src={embed + videoLink}
                      width={1040}
                      height={560}
                    ></iframe>
                ) : <p>Tu dispositivo no soporta la renderización. Por favor visita el canal de Youtube. IBM Hurlingham</p>         
            }
        </div>
        <div >
        <p >Descripción</p>
        <p >{detail?.description}</p>
        </div>
      </section>

       <LastFourSermonCard />


        <section >
          <div >
            <NavLink to='/sermones'><button  >Ver más sermones...</button></NavLink>
          </div>
        </section>
    </div>
      
    </>
  )
}

export default SermonDetail