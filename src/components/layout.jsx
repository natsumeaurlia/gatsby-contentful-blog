import React from "react"
import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"
import SNS from "./sns"

import { Container, Col, Row } from "react-bootstrap"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Container fluid className="mt-5">
        <Row>
          <Col lg={1} id="sticky-sidebar">
            <div class="sticky-top d-none d-lg-block">
              <SNS className="d-flex flex-lg-column" />
            </div>
          </Col>
          <Col lg={8} md={12}>
            {children}
          </Col>
          <Col lg={3} md={12} className="mt-3 mt-lg-0">
            <Sidebar />
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
