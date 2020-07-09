import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Form, Button } from "react-bootstrap"

const Contact = ({ location }) => {
  return (
    <Layout>
      <SEO
        title={`お問い合わせ`}
        description={`お問い合わせフォーム`}
        location={location}
      />
      <div className="text-center p-5" style={{ color: "#7B7B7B" }}>
        <h1 className="p-3">お問い合わせ</h1>

        <Form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <Form.Group controlId="formBasicName">
            <Form.Label>お名前</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="お名前"
              maxlength="30"
              minlength="2"
              required
              autocomplete="name"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>メールアドレス</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="example@example.com"
              pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
              required
              autocomplete="email"
            />
          </Form.Group>
          <Form.Group controlId="ControlTextarea">
            <Form.Label>お問い合わせ内容</Form.Label>
            <Form.Control as="textarea" required name="content" rows="8" />
          </Form.Group>
          <Button variant="primary" type="submit">
            送信
          </Button>
        </Form>
      </div>
    </Layout>
  )
}

export default Contact
