import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllSermon } from '../../Redux/actions'
import SermonCard from '../Sermon/sermonCard';
import SermonCardLast from '../Sermon/SermonCardLast'
import landing_portada from '../../assets/pictures/landing_portada.jpg'
import { NavLink } from 'react-router-dom';
import maps from '../../assets/pictures/mapsIBMH.png'

const Landing = () => {

  const dispatch = useDispatch();
  const sermons = useSelector(state => state.sermons);

  useEffect(()=>{
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
      <div className='pt-20'>

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
      <section>
        <img src={maps} alt="ubicación de IBMH" />
      </section>

        <h3>Ultimos sermones</h3>
        <section>
         { lastFirst.map(s =>{
             return (
              <div>
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
            )})
          }
        </section>
        <div>
          <div >
          <NavLink to='/sermones'><button  >Ver más sermones...</button></NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing