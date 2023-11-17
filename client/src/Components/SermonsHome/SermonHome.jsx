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
    <div>
      <section >
        {
            sermons.length ? (sermons.map(s =>{
                return(
                  <div >
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
        </section>
    </div>
    </>
  )
}

export default SermonHome