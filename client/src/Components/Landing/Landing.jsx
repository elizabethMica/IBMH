import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllSermon } from '../../Redux/actions'
import SermonCard from '../Sermon/sermonCard';
import landing_portada from '../../assets/pictures/landing_portada.jpg'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../../App.css'

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
        <Row>
         { lastThree.map(s =>{
             return (
              <Col>
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
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Button as={NavLink} to='/sermones' className='botonVerMas' variant="light">Ver más...</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Landing