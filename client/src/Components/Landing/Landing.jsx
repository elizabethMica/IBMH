import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllSermon } from '../../Redux/actions'
import SermonCard from '../Sermon/sermonCard';
import landing_portada from '../../assets/pictures/landing_portada.jpg'

const Landing = () => {

  const dispatch = useDispatch();
  const sermons = useSelector(state => state.sermons);

  useEffect(()=>{
    dispatch(getAllSermon())
  },[])

  const lastThree = sermons.slice(-3)

  return (
    <div>
      <img src={landing_portada} alt="foto ah" width={"full"} height={500}/>
      Landing
       {
        lastThree.map(s =>{
          return (<SermonCard
                    key={s.id}
                    id={s.id}
                    title={s.title}
                    verse={s.verse}
                    description={s.description}
                    cover={s.cover}
                    videoYT={s.videoYT}
                    date={s.date} 
                    />)
        })
       }

    </div>
  )
}

export default Landing