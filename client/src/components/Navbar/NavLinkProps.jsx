import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function NavLinkProps({link,name}) {
  return (
    <>
       <LinkContainer to={link}>
       {/* style={{ paddingRight: "40px" }} */}
            <Nav.Link >{name}</Nav.Link>
          </LinkContainer>{" "}
    </>
  )
}

export default NavLinkProps