import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img  src={logo} height="30px" alt=""/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#services">Our services</Nav.Link>
            <Nav.Link href="#experts">Experts</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;