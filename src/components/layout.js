import React from "react"
import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"

import { Container } from "react-bootstrap"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <section style={{ marginTop: "9rem" }}>
        <Container>
          <div className="row">
            <div className="col-lg-1" />
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

export default Layout
