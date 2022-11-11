import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import NavbarProps from "./NavbarProps";

const NavLink= () => {
  return (
    <Navbar bg="light" expand="sm" className="navbar_link">
      <LinkContainer to="/">
        <Navbar.Brand>
          {" "}
          <a className="navbar-brand" href="/#">
            <div>
              <img
                src="\image/logo.jpeg"
                style={{
                  height: "50px",                  
                }}
                alt="logo of a company"
              />
            </div>
          </a>
        </Navbar.Brand>
      </LinkContainer >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto navbar-nav">
          <NavbarProps link="/" name="Home" />
          <NavbarProps link="/about" name="About" />
          <NavbarProps link="/service" name="Service" />
          <NavbarProps link="/works" name="Works" />
          <NavbarProps link="/contactus" name="Contact us" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavLink;