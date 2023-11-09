import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllSermon } from '../../Redux/actions'
import SermonCard from '../Sermon/sermonCard';
import landing_portada from '../../assets/pictures/landing_portada.jpg'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image'

const Landing = () => {

  const dispatch = useDispatch();
  const sermons = useSelector(state => state.sermons);

  useEffect(()=>{
    dispatch(getAllSermon())
  },[])

  const lastThree = sermons.slice(-3)

 //hacer que vaya al principio de la ventana al ir a /sermones

  return (
    <>
        <Image src={landing_portada} alt="foto ah" fluid />
      
    <Container>
      <h3>Ultimos sermones</h3>
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

       <NavLink to="/sermones"><button>Ver más...</button></NavLink>
       </Container>
    </>
  )
}

export default Landing