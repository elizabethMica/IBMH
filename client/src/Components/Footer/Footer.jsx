import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink, Link } from 'react-router-dom';
import logoibm from '/logoibm.png'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Footer() {
  return (
    <footer className='cardFooter py-4' variant='light'>
      <Container>
      <CardGroup >
      <Card className='cardFooterBody text-white' variant='light'>
      <NavLink to='/sermones'><img src={logoibm} 
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="Iglesia logo"/>
         </NavLink>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>


      <Card className='cardFooterBody text-white' variant='light'>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
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

{/* <nav className='row'>
         <NavLink to='/sermones'><img src={logoibm} 
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="Iglesia logo"/>
         </NavLink>
        </nav> */}