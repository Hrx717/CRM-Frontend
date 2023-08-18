import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assests/logo3.png";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
  const navigate = useNavigate();

  const logMeOut = () => {
    navigate("/");
  };

  return (
    <Navbar collapseOnSelect bg="light" variant='light' expand="md">
      <Navbar.Brand>
        <LinkContainer to='/'>
        <img src={logo} alt="logo" role="button" className="ms-3 mb-2" width="40px"/>
        </LinkContainer>
        <LinkContainer to='/' role='button' className="fw-semibold ms-1">
        <label>CRM</label>
        </LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto me-5">
          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tickets">
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>

          <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};