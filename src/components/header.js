import React from "react"
import { Nav, Navbar, Container } from "react-bootstrap"
import { Link, useStaticQuery, graphql } from "gatsby"

const Header = props => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
            siteUrl
          }
        }
      }
    `
  )
  return (
    <Navbar bg="white" expand="lg">
      <Navbar.Brand href="/">{site.siteMetadata.title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
