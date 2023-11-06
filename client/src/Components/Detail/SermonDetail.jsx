import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { getDetail } from "../../Redux/actions";

const SermonDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const detail = useSelector(state => state.detail)

    const enbed = "https://www.youtube.com/embed/"
    useEffect(()=>{
      dispatch(getDetail(id))
    },[])

  return (
    <div>
       funciona si le pasamos el link de embed (checkear)
            {detail?.videoYT? (
                    <iframe
                      src={detail?.videoYT}
                      width={840}
                      height={560}
                    ></iframe>
                ) : null          
            }

        
        <h3>{detail?.title}</h3>
        <h4>{detail?.verse}</h4>
        <p>{detail?.description}</p>
    </div>
  )
}

export default SermonDetail