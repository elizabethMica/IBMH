import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllSermon} from '../../Redux/actions';
import SermonCard from '../Sermon/sermonCard';


const SermonHome = () => {

    const dispatch = useDispatch();
    const sermons = useSelector(state => state.sermons);
    const coincidence = useSelector(state => state.coincidences)


    useEffect(()=>{
        dispatch(getAllSermon())
    },[])

  return (
    <>
    <div className='mx-8 py-24  '>
        {
            sermons.length ? (sermons.map(s =>{
                return(
                  <div className=' flex flex-col justify-center items-center'>
                    <SermonCard
                    key={s.id}
                    id={s.id}
                    title={s.title}
                    verse={s.verse}
                    description={s.description}
                    cover={s.cover}
                    videoYT={s.videoYT}
                    date={s.date}
                    />
                    </div>
                )
              })) : (coincidence===false
                ?(<p>No hay coincidencias</p>)
                :(<p>Cargando...</p>))
        }
    </div>
    </>
  )
}

export default SermonHome