import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { Link, useStaticQuery, graphql } from "gatsby"

import Image from "./image"

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
    <Navbar bg="light" className="py-2 shadow-sm" expand="lg">
      <Navbar.Brand href="/">
        <div className="d-flex">
          <Image
            filename="icon.png"
            className="mr-2"
            style={{ width: "30px", height: "30px" }}
          />
          {site.siteMetadata.title}
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="px-4" as={Link} to="/contact">
            お問い合わせ
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
