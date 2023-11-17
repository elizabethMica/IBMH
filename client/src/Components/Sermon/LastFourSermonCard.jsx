import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SermonCard from './sermonCard';
import { getAllSermon, clearDetail } from '../../Redux/actions';

function LastFourSermonCard() {

    const dispatch = useDispatch();
    const sermons = useSelector(state => state.sermons)

    useEffect(()=>{
        dispatch(getAllSermon())
    },[])

    const lastFour = sermons.slice(-4)
    const lastFirst = lastFour.toReversed()

  return (
    <>
    <h3>Últimos sermones</h3>
    <div>
         { lastFirst.map(s =>{
             return (
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
            )})
          }
        </div>
    </>
  )
}

export default LastFourSermonCard