import React from 'react'
import { Link } from 'react-router-dom'
import bookLogo from '/logoibm.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <>
    <Navbar expand="md" className="nav" variant='light' >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
              src={bookLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Iglesia logo"
            /> Hurlingham
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end">
            <Nav.Link  as={Link} to="/sermones">Sermones</Nav.Link>
            <Nav.Link  as={Link} to="/about">Nosotros</Nav.Link>
            <Nav.Link  as={Link} to="/contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navigation