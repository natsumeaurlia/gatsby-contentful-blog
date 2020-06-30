import React from "react"
import { Container, Row, Nav } from "react-bootstrap"
import Styles from "./sidebar.module.css"

const Sidebar = () => (
  <div className={Styles.sidebar}>
    <Row>
      <div className="col-lg-12">
        <div className={Styles.sidebar_item + " " + Styles.recent_posts}>
          <div className={Styles.sidebar_heading}>
            <h2>Recent Posts</h2>
          </div>
          <div className="content">
            <Nav>
              <Nav.Link to="">
                <h5 className={Styles.head}>あいうえお</h5>
                <span className={Styles.date}>May 31, 2020</span>
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className={Styles.sidebar_item}>
          <div className={Styles.sidebar_heading}>
            <h2>Categories</h2>
          </div>
          <div className="content">
            <Nav className={Styles.categories}>
              <Nav.Link>Nature</Nav.Link>
              <Nav.Link>Nature Lifestyle</Nav.Link>
            </Nav>
          </div>
        </div>
      </div>
    </Row>
  </div>
)

export default Sidebar
