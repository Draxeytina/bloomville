import Container from 'react-bootstrap/Container';
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/logo.png';

function Navmenu() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img
              alt=""
              src={Logo}
              width="45"
              height="45"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <NavDropdown title="Subsidiaries" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/subsidiaries/bloomville-consultancy">
                  Bloomville Consultancy
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/subsidiaries/logitap-freight">
                  Logitap Freight Services
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/subsidiaries/bloomville-media">
                  Bloomville Media
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/subsidiaries/mayville-brands">
                  Mayville Brands
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/subsidiaries/logitap-express">
                  Logitap Express
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/infomercials">Infomercials</Nav.Link>
              {/* <Nav.Link as={Link} to="/sign-in">Sign In</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navmenu;
