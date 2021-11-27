import React from "react"
import { AppBar, Grid, Link as MuiLink } from "@mui/material"
import { Link, useStaticQuery, graphql } from "gatsby"
// @ts-ignore
import { site_icon } from "./header.module.scss"

import Image from "../atoms/image"

const Header = props => {
  const { site } = useStaticQuery<GatsbyTypes.HeaderQueryQuery>(
    graphql`
      query HeaderQuery {
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
    <AppBar>
      <Link to="/">
        <div className={site_icon}>
          <Image
            fileName="icon.png"
            className="mr-2"
            style={{ width: "30px", height: "30px" }}
          />
          {site?.siteMetadata?.title}
        </div>
      </Link>
      {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
      {/*<Navbar.Collapse id="basic-navbar-nav">*/}
      {/*  <Nav className="ml-auto">*/}
      {/*    <Nav.Link className="px-4" as={Link} href="/contact">*/}
      {/*      お問い合わせ*/}
      {/*    </Nav.Link>*/}
      {/*  </Nav>*/}
      {/*</Navbar.Collapse>*/}
    </AppBar>
  )
}

export default Header
