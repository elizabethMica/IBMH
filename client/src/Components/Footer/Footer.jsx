import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink, Link } from 'react-router-dom';
import logoibm from '/logoibm.png'
import logoWhite from '/logoWhite.png'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {BiChurch} from 'react-icons/bi'
import {FaLocationDot} from 'react-icons/fa6'


function Footer() {
  return (
    <footer className='cardFooter py-4' variant='light'>
      <Container>
      <CardGroup >
      <Card className='cardFooterBody text-white' variant='light'>
      <NavLink to='/sermones'><img src={logoWhite} 
              width="70"
              height="70"
              alt="IBM Hurlingham"/>
         </NavLink>
        <Card.Body>
          <Card.Title>Iglesia Bautista Misionera Hurlingham</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>


      <Card className='cardFooterBody text-white' variant='light'>
        <Card.Body>
          <Card.Title>Contacto</Card.Title>
          <Card.Text>
           <Col className='my-2'>
          <BiChurch color={'white'} size={20}/> Reunion general: Domingos 10:30hs
           </Col>
           <Col className='my-2'>
          <FaLocationDot color={'white'} size={20} /> Schumann 2334, Hurlingham, Provincia de Buenos Aires
           </Col>
          </Card.Text>
        </Card.Body>
      </Card>


      <Card className='cardFooterBody text-white' variant='light'>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
      </Container>
    </footer>
  )
}

export default Footer

{/* 
FaLocationDot

BiChurch

MdEmail

BsSpotify

FaYoutube

FaFacebookSquare
*/}