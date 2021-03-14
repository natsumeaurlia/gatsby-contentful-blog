import React from "react"
import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"

import { Container, Row, Col } from "react-bootstrap"

const PostLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <section style={{ marginTop: "9rem" }}>
        <Container fluid className="px-0">
          <Row>
            <Col lg={8} md={12}>
              {children}
            </Col>
            <Col lg={4} className="mt-3 mt-lg-0">
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default PostLayout
