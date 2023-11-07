import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { getDetail } from "../../Redux/actions";

const SermonDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const detail = useSelector(state => state.detail)

    
    useEffect(()=>{
      dispatch(getDetail(id))
    },[])
    
    const embed = "https://www.youtube.com/embed/"
    const videoLink = detail?.videoYT?.split("/")[3]
    
    const goBack = ()=>{
      navigate(-1)
    }

  return (
    <div>
            {detail?.videoYT? (
                    <iframe
                      src={embed + videoLink}
                      width={840}
                      height={560}
                    ></iframe>
                ) : null          
            }
        <h3>{detail?.title}</h3>
        <h4>{detail?.verse}</h4>
        <p>{detail?.description}</p>
        <button onClick={goBack}>Volver</button>
    </div>
  )
}

export default SermonDetail