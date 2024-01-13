import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Icono from "./Icono/Icono";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-light">
      <Container>
        <Link className="navbar-brand" to="/">
          <Icono />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/category/Congeladas">
              Empanadas Congeladas
            </Link>
            <Link className="nav-link" to="/category/Horneadas">
              Empanadas Horneadas
            </Link>
            <Link className="nav-link" to="/category/Otros">
              Otros
            </Link>
          </Nav>
          <Nav>
            <Link className="nav-link" to="/cart">
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
