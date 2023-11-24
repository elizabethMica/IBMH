import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllSermon} from '../../Redux/actions';
import SermonCard from '../Sermon/sermonCard';
import Paginate from '../Paginate/Paginate';
import LastFourSermonCard from '../Sermon/LastFourSermonCard'


const SermonHome = () => {

    const dispatch = useDispatch();
    const sermons = useSelector(state => state.paginado);
    const coincidence = useSelector(state => state.coincidences)


    useEffect(()=>{
      window.scrollTo(0, 0)
        dispatch(getAllSermon())
    },[])

  return (
    <>
    <div className='mx-8 pt-24 gap-4 flex flex-col md:flex-row md:flex-wrap md:justify-evenly'>
        {
            sermons?.length ? (sermons?.map(s =>{
                return(
                  <div className=' flex justify-center items-center md:my-4'>
                    <SermonCard
                     key={s.id}
                     id={s.id}
                     title={s.title}
                     verse={s.verse}
                     verseText={s.verseText}
                     preacher={s.preacher}
                     book={s.book}
                     keywords={s.keywords}
                     description={s.description}
                     cover={s.cover}
                     videoYT={s.videoYT}
                     date={s.date} 
                    />
                    </div>
                )
              })) 
              : (coincidence===false
                ?(<><div className='justify-center items-center bg-[#bdbdbd73] w-full py-8'><p className='text-xl font-bold text-center'>No hay coincidencias</p>
                </div><div>
                <LastFourSermonCard/></div></>)
                :(<div className='justify-center items-center w-full py-8'><p className='text-xl font-bold text-center'>Cargando...</p></div>))
        }
    </div>
    
    <Paginate/>
    </>
  )
}

export default SermonHome