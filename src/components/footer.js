import React from "react"
import { Container, Row, Nav } from "react-bootstrap"
import FooterStyles from "./footer.module.css"
import CopyRight from "./copyright"
import { Link } from "gatsby"

const Footer = () => (
  <footer className={FooterStyles.site_footer + " mt-5"}>
    <Container>
      <Row>
        <div className="col-sm-12 col-md-6">
          <h6>About</h6>
          <p className="text-justify">現役フリーランスエンジニアのブログ</p>
        </div>
        <div className="col-xs-6 col-md-3">
          <h6>Categories</h6>
          <Nav className={FooterStyles.footer_links}>
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
        </div>
        <div className="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <Nav className={FooterStyles.footer_links}>
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
        </div>
      </Row>
      <hr />
    </Container>
    <Container>
      <Row>
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className={FooterStyles.copyright_text}>
            <CopyRight />
          </p>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12"></div>
      </Row>
    </Container>
  </footer>
)

export default Footer
