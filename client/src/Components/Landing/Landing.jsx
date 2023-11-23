import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllSermon } from '../../Redux/actions'
import SermonCard from '../Sermon/sermonCard';
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

  //hacer en estado global
  const latest = sermons.slice(-1) 
  const lastFour = sermons.slice(-4)
  const lastFirst = lastFour.toReversed()

 //hacer que vaya al principio de la ventana al ir a /sermones

  return (
    <>
      {/* <img src={landing_portada} alt="foto de portada"  className={"pt-8"} /> */}
      <div className='pt-32'>

      <section >
         { latest.map(s =>{
             return (
              <div>
                <SermonCardLast
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