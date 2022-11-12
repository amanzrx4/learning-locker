import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

import "./navbar.css";
import NavLinkProps from "./NavLinkProps";
function NavLink() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="navbar"
    >
      <LinkContainer to="/">
        <Navbar.Brand href="#home" className="navbar_img">
          <p>Learning Locker</p>
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav navbar_list">
        <Nav className="m-auto">
          <NavLinkProps link="/aboutus" name="About us" />
          <NavLinkProps link="/services" name="Services" />
          <div className="dropdown">
            <NavLinkProps link="/classes" name="Classes" />
            <div className="dropdown-content">
              <NavLinkProps link="class1" name="class1" />
              <NavLinkProps link="class2" name="class2" />
              <NavLinkProps link="class3" name="class3" />
            </div>
          </div>
          <NavLinkProps link="/academic" name="Academic" />
          <NavLinkProps link="/contactus" name="Contact us" />
        </Nav>
        <Nav>
          {/* <LinkContainer to="/login"> */}
            {" "}
            <Nav.Link>
              <button className="navbar_button">Login</button>
            </Nav.Link>
          {/* </LinkContainer> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavLink;
