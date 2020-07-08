import React from "react"
import { Nav, Navbar, Container } from "react-bootstrap"
import { Link } from "gatsby"

const Header = props => (
  <Navbar bg="white" expand="lg">
    <Navbar.Brand href="/">N's Dump Logs</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/">
          Profile
        </Nav.Link>
        <Nav.Link as={Link} to="/">
          Contact
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
