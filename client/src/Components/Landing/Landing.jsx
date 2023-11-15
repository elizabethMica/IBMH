import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllSermon } from '../../Redux/actions'
import SermonCard from '../Sermon/sermonCard';
import SermonCardLast from '../Sermon/SermonCardLast'
import landing_portada from '../../assets/pictures/landing_portada.jpg'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../../App.css'
import maps from '../../assets/pictures/mapsIBMH.png'

const Landing = () => {

  const dispatch = useDispatch();
  const sermons = useSelector(state => state.sermons);

  useEffect(()=>{
    dispatch(getAllSermon())
  },[])

  const latest = sermons.slice(-1) 
  const lastFour = sermons.slice(-4)
  const lastFirst = lastFour.toReversed()

 //hacer que vaya al principio de la ventana al ir a /sermones


 //CAMBIAR A TAILWIND Y HACER MOBILE FIRST !!!

  return (
    <>
      <Image src={landing_portada} alt="foto ah" fluid />
      <Container className='justify-content-center'>

      <Row className="justify-content-center">
         { latest.map(s =>{
             return (
              <Col className='wrap-reverse  justify-content-center'>
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
              </Col>
            )})
          }
        </Row>
      <Row className='justify-content-center'>
        <Image src={maps} alt="djfh" style={{width:'50rem', justifyContent: 'center', alignContent: 'center'}}/>
      </Row>

        <h3 className='my-4'>Ultimos sermones</h3>
        <Row className="justify-content-center">
         { lastFirst.map(s =>{
             return (
              <Col className='wrap-reverse  justify-content-center'>
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
              </Col>
            )})
          }
        </Row>
        <Row className="justify-content-center my-4">
          <Col md="auto">
            <Button as={NavLink} to='/sermones' className='botonVerMas' variant="light">Ver más sermones...</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Landing