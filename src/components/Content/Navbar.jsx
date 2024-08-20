import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => {
  return (
    <Navbar bg="secondary" expand="lg" style={{ color: 'white', position: 'sticky', top: 0, zIndex: 1000 }}>
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: 'white' }}>Ravendra</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/projects" style={{ color: 'white' }}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: 'white' }}>Contact</Nav.Link>
            {/* <Nav.Link as={Link} to="/updates" style={{ color: 'white' }}>Updates</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
