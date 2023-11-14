import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function SermonCardLast(Props) {
  return (
    <>
    <Row className='my-4 justify-content-center'>

     <Col className='col-6' >
        <h3>Sermón del Domingo {Props.date}</h3>
        <NavLink to={`/sermon/${Props.id}`}>
            <Image src={Props.cover} style={{ width: '40rem' }} className='imgLatest'/>
        </NavLink>
     </Col>
     <Col className='textoLatest col-6 m-auto justify-content-center'> 
        <h3>{Props.title}</h3>
        <h5>{Props.verse}</h5>
        <p className='descriptionCardLatest'>{Props.description}</p>
        <Button as={NavLink} to={`/sermon/${Props.id}`} variant='light' className='btnEscuchar'>Escuchar</Button>
     </Col>
     
    </Row>
    </>
  )
}

export default SermonCardLast