import React from "react"
import { Container, Row, Nav } from "react-bootstrap"
import FooterStyles from "./footer.module.css"
import CopyRight from "./copyright"
import { Link } from "gatsby"

const Footer = () => (
  <footer className={FooterStyles.site_footer}>
    <Container>
      <Row>
        <div className="col-sm-12 col-md-6">
          <h6>About</h6>
          <p className="text-justify">
            Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
            help the upcoming programmers with the code. Scanfcode focuses on
            providing the most efficient code or snippets as the code wants to
            be simple. We will help programmers build up concepts in different
            programming languages that include C, C++, Java, HTML, CSS,
            Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
          </p>
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
        <div className="col-md-4 col-sm-6 col-xs-12">
          <Nav className={FooterStyles.social_icons}>
            <Nav.Link as={Link} to="/" className={FooterStyles.facebook}>
              <i className="fa fa-facebook" />
            </Nav.Link>
            <Nav.Link as={Link} to="/" className={FooterStyles.twitter}>
              <i className="fa fa-twitter" />
            </Nav.Link>
            <Nav.Link as={Link} to="/" className={FooterStyles.dribbble}>
              <i className="fa fa-dribbble" />
            </Nav.Link>
            <Nav.Link as={Link} to="/" className={FooterStyles.linkedin}>
              <i className="fa fa-linkedin" />
            </Nav.Link>
          </Nav>
        </div>
      </Row>
    </Container>
  </footer>
)

export default Footer
