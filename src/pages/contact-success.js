import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Form, Button } from "react-bootstrap"

const Success = ({ location }) => {
  return (
    <Layout>
      <SEO
        title={`お問い合わせ内容を送信しました`}
        description={`お問い合わせ内容を送信しました`}
        location={location}
      />
      <div className="text-center p-5" style={{ color: "#7B7B7B" }}>
        <h1 className="p-3">お問い合わせ内容を送信しました</h1>
        <Link to="/contact" className="mt-5 btn_orange">
          戻る
        </Link>
      </div>
    </Layout>
  )
}

export default Success
