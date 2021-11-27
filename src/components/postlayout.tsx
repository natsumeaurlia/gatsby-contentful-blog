import React from "react"
import Header from "./organism/header"
import Footer from "./organism/footer"
import Sidebar from "./organism/sidebar"
import { Container, CssBaseline, Grid } from "@mui/material"

interface Props {
  children: React.ReactNode
}

const PostLayout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <Header />
      <section style={{ marginTop: "9rem" }}>
        <Container maxWidth='lg'>
          <Grid container spacing={1}>
            <Grid item lg={8} md={12}>
              {children}
            </Grid>
            <Grid item lg={4} className="mt-3 mt-lg-0">
              <Sidebar />
            </Grid>
          </Grid>
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default PostLayout
