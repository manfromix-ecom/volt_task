import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand>Invoice App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Invoices
          </Nav.Link>
          <Nav.Link as={Link} to="/products">
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/customers">
            Customers
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
