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
import {FaLocationDot, FaYoutube} from 'react-icons/fa6'
import {MdEmail} from 'react-icons/md'
import {BsSpotify} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'

function Footer() {

  const youtubeLink = 'https://www.youtube.com/@ibmhurlingham879'
  const spotifyLink = 'https://open.spotify.com/show/2u3WpNOhXByNh9ifTLlgCQ?si=9452c98f2180480e'
  const facebookLink = 'https://facebook.com/ibmhurlingham/'

  return (
    <footer className='cardFooter py-4' variant='light'>
    <Container>
      <CardGroup >
      <Card className='cardFooterBody text-white ' variant='light'>
      <NavLink to='/sermones'><img src={logoWhite} 
              width="70"
              height="70"
              alt="IBM Hurlingham"/>
         </NavLink>
        <Card.Body className='m-0 p-0'>
          <Card.Title >Iglesia Bautista Misionera Hurlingham</Card.Title>
          <Card.Text>
            texto...
          </Card.Text>
        </Card.Body>
      </Card>


      <Card className='cardFooterBody text-white' variant='light'>
        <Card.Body>
          <Card.Title>Contacto</Card.Title>
          <Card.Text>
           <Col className='my-2'>
              <BiChurch color={'white'} size={20}/> Reunion general: <strong>Domingos 10:30hs</strong>
           </Col>
           <Col className='my-2'>
              <FaLocationDot color={'white'} size={20} /> Schumann 2334, Hurlingham, Provincia de Buenos Aires
           </Col>
           <Col className='my-2'>
              <MdEmail color={'white'} size={20} /> ibmhurlingham@gmail.com
           </Col>
          </Card.Text>
        </Card.Body>
      </Card>


      <Card className='cardFooterBody text-white' variant='light'>
        <Card.Body>
          <Card.Title>Redes Sociales</Card.Title>
          <Card.Text>
          <Col className='my-2 text-white'  as={Link} to={youtubeLink} style={{ textDecoration: "none"}}>
              <FaYoutube color={'white'} size={20}/> IBM Hurlingham iglesia bautista     
           </Col>
           <br/>
           <Col className='mt-3 mb-2 text-white' as={Link} to={spotifyLink} style={{ textDecoration: "none"}}>
              <BsSpotify color={'white'} size={20} /> IBM Hurlingham
           </Col>
           <br/>
           <Col className='mt-3 mb-2 text-white' as={Link} to={facebookLink} style={{ textDecoration: "none"}}>
              <FaFacebookSquare color={'white'} size={20} /> Iglesia Bautista Misionera Hurlingham
           </Col>
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