import React from "react"
import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"

import { Container } from "react-bootstrap"

import SNS from "../components/sns"

const PostLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <section style={{ marginTop: "9rem" }}>
        <Container fluid>
          <div className="row">
            <div className="col-lg-1" id="sticky-sidebar">
              <div class="sticky-top px-2 pt-5 d-none d-lg-block">
                <SNS className="d-flex flex-lg-column" />
              </div>
            </div>
            <div className="col-lg-7 col-md-12">{children}</div>
            <div className="col-lg-4 mt-3 mt-lg-0">
              <Sidebar />
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  )
}

export default PostLayout
