import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllSermon } from '../../Redux/actions'
import SermonCardLast from '../Sermon/SermonCardLast'
import { NavLink } from 'react-router-dom';
import maps from '../../assets/pictures/mapsIBMH.png'
import LastFourSermonCard from '../Sermon/LastFourSermonCard';
import InfoMeeting from './InfoMeeting';

const Landing = () => {


  const dispatch = useDispatch();
  const sermons = useSelector(state => state.sermons);

  useEffect(()=>{
    window.scrollTo(0, 0)
    dispatch(getAllSermon())
  },[])


  const latest = sermons.slice(-1) 

  return (
    <>
      {/* <img src={landing_portada} alt="foto de portada"  className={"pt-8"} /> */}
      <div className='pt-24 md:pt-32'>

      <section >
         { latest.map(s =>{
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
      </div>
    </>
  )
}

export default Landing