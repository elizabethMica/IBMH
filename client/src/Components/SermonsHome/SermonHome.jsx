import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllSermon, paginado} from '../../Redux/actions';
import SermonCard from '../Sermon/SermonCard';
import Paginate from '../Paginate/Paginate';
import LastFourSermonCard from '../Sermon/LastFourSermonCard'
import Filters from '../Filters/Filters';
import SearchBar from '../SearchBar/SearchBar';
import InfoMeeting from '../Landing/InfoMeeting';
import BannerContact from '../Contact/BannerContact';


const SermonHome = () => {

    const dispatch = useDispatch();
    const sermons = useSelector(state => state.paginado);
    const coincidence = useSelector(state => state.coincidences)


    useEffect(()=>{
      dispatch(getAllSermon())
      dispatch(paginado(1))
      window.scrollTo(0, 0)
    },[])

  return (
    <>
    <div className='flex flex-col md:flex-row justify-center md:justify-around items-center gap-6'>
    <Filters/>
    <SearchBar />
    </div>
    
    <div className='mx-8 pt-4 gap-4 flex flex-col md:flex-row md:flex-wrap md:justify-center md:items-start'>
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
    <InfoMeeting/>
    <BannerContact/>
    
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.604622047778!2d-58.64995482427317!3d-34.58886955671411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbfb4a6a7a6dd%3A0x563ff2a2cb47863f!2sIglesia%20Bautista%20Misionera%20de%20Hurlingham!5e0!3m2!1ses-419!2sar!4v1701041540838!5m2!1ses-419!2sar" 
       
       className="border-none w-full h-96" 
       allowFullScreen="" 
       loading="lazy" 
       referrerPolicy="no-referrer-when-downgrade">
       </iframe>
    </>
  )
}

export default SermonHome