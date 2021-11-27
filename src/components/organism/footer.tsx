import React from "react"
import { Grid } from "@mui/material"
import CopyRight from "../atoms/copyright"
import { Link } from "gatsby"
// @ts-ignore
import { copyright_text, footer_links, site_footer } from "./footer.module.scss"

const Footer = () => (
  <footer className={site_footer + " mt-5"}>
    <Grid container>
      <Grid item sm={12} md={6}>
        <h6>About</h6>
        <p className="text-justify">
          現役フリーランスエンジニアの勉強・備忘録。
          <br />
          バックエンドがメイン。フロントからインフラまで色々やってます。
        </p>
      </Grid>
      <Grid item xs={6} md={3}>
        <h6>Quick Links</h6>
        <div className={footer_links}>
          <Link to="/">
            Home
          </Link>
          <Link to="/privacy">
            プライバシーポリシー
          </Link>
          <Link to="/sitemap.xml">
            サイトマップ
          </Link>
        </div>
      </Grid>
    </Grid>
    <hr />
    <Grid container>
      <Grid item md={8} sm={6} xs={12}>
        <p className={copyright_text}>
          <CopyRight />
        </p>
      </Grid>
    </Grid>
  </footer>
)

export default Footer
