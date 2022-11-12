import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

import "./navbar.css";
import NavLinkProps from "./NavLinkProps";
function NavLink() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar">
      <LinkContainer to="/" >
        <Navbar.Brand href="#home" className="navbar_img">
       <p>Learning Locker</p>
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav navbar_list">
        <Nav className="m-auto">
          <NavLinkProps link="/aboutus" name="About us" />
          <NavLinkProps link="/services" name="Services" />
          <NavLinkProps link="/classes" name="Classes" />
          <NavLinkProps link="/academic" name="Academic" />
          <NavLinkProps link="/contactus" name="Contact us" />
        </Nav>
        <Nav>
          <Nav.Link href="#login" link="/login">
            <button className="navbar_button">Login</button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavLink;