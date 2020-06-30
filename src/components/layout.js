import React from "react"
import { Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"

import { Container } from "react-bootstrap"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Header />
      <section style={{ marginTop: "9rem" }}>
        <Container>
          <div className="row">
            <div className="col-lg-8">{children}</div>
            <div className="col-lg-4">
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
