import React from "react"
import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"

import { Container } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Row } from "react-bootstrap"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Container fluid className="mt-5">
        <Row>
          <Col lg={8} md={12}>{children}</Col>
          <Col lg={4} className="mt-3 mt-lg-0">
            <Sidebar />
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
