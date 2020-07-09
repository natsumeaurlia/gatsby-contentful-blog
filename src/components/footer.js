import React from "react"
import { Container, Row } from "react-bootstrap"
import FooterStyles from "./footer.module.css"
import CopyRight from "./copyright"

const Footer = () => (
  <footer className={FooterStyles.site_footer + " mt-5"}>
    <Container>
      <Row>
        <div className="col-sm-12 col-md-6">
          <h6>About</h6>
          <p className="text-justify">現役フリーランスエンジニアのブログ</p>
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
