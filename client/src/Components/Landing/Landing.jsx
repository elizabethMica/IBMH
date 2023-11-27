import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllSermon, getLastSermon } from '../../Redux/actions'
import SermonCardLast from '../Sermon/SermonCardLast'
import { NavLink } from 'react-router-dom';
import maps from '../../assets/pictures/mapsIBMH.png'
import LastFourSermonCard from '../Sermon/LastFourSermonCard';
import InfoMeeting from './InfoMeeting';

const Landing = () => {


  const dispatch = useDispatch();
  const sermons = useSelector(state => state.lastSermon);

  useEffect(()=>{
    window.scrollTo(0, 0)
    dispatch(getAllSermon())
    dispatch(getLastSermon())
  },[])


  return (
    <>
      {/* <img src={landing_portada} alt="foto de portada"  className={"pt-8"} /> */}
      <div className='pt-24 md:pt-32'>

      <section >
         { sermons?.map(s =>{
             return (
              <div>
                <SermonCardLast
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
            )})
          }
        </section>

        <InfoMeeting/>
        

        <LastFourSermonCard/>

        <div className='flex justify-center items-center mb-4'>
          <NavLink to='/sermones'><button className='text-lg rounded-lg bg-[#be8552] border-2 border-[#be8552] px-4 my-4' >Ver más sermones</button></NavLink>
          
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.604622047778!2d-58.64995482427317!3d-34.58886955671411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbfb4a6a7a6dd%3A0x563ff2a2cb47863f!2sIglesia%20Bautista%20Misionera%20de%20Hurlingham!5e0!3m2!1ses-419!2sar!4v1701041540838!5m2!1ses-419!2sar" 
       
        className="border-none w-full h-96" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </>
  )
}

export default Landing