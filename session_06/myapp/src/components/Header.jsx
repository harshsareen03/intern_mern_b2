import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <>

<Navbar bg="dark" variant="dark">
        <Container >
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mx-auto">
          <LinkContainer to="/"><Nav.Link href="#home">Home</Nav.Link></LinkContainer>  
          <LinkContainer to="/aboutus"><Nav.Link >About us</Nav.Link></LinkContainer>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
        <Nav.Link href="#home">Home</Nav.Link>


        </Nav>
        </Container>
       
      </Navbar>    
    </>
  )
}

export default Header