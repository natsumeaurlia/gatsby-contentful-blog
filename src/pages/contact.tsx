import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FormGroup, Button, FormControl, TextField, FormLabel, TextareaAutosize } from "@mui/material"
import { PageProps } from "gatsby"

const Contact = ({ location }: PageProps) => {
  return (
    <Layout>
      <Seo
        title={`お問い合わせ`}
        description={`お問い合わせフォーム`}
        location={location}
      />
      <div className="text-center p-5" style={{ color: "#7B7B7B" }}>
        <h1 className="p-3">お問い合わせ</h1>

        <form
          name="contact"
          method="POST"
          action="/contact-success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <FormGroup>
            <FormLabel>お名前</FormLabel>
            <TextareaAutosize
              name="name"
              placeholder="お名前"
              minRows="{2}"
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>メールアドレス</FormLabel>
            <TextField
              type="email"
              name="email"
              placeholder="example@example.com"
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>お問い合わせ内容</FormLabel>
            <TextareaAutosize required name="content" rows="8" />
          </FormGroup>
          <div data-netlify-recaptcha="true" />
          <Button variant="contained" type="submit">
            送信
          </Button>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
