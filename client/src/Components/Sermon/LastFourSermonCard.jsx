import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SermonCard from './sermonCard';
import {  getLastFour } from '../../Redux/actions';

function LastFourSermonCard() {

    const dispatch = useDispatch();
   
    const lastFour = useSelector(state => state.lastFour)

    useEffect(()=>{
        dispatch(getLastFour())
    },[])


    

  return (
    <>
    <h3 className='mx-8 mt-8 md:mb-4 text-center md:text-start text-lg font-bold md:text-xl'>Últimos sermones</h3>
    <div className='flex flex-col justify-center items-center md:flex-row md:flex-wrap md:gap-10'>
         { lastFour?.map(s =>{
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