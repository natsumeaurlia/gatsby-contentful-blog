import React from "react"
import Header from "./organism/header"
import Footer from "./organism/footer"
import Sidebar from "./organism/sidebar"
import Share from "./organism/share"
import { Container, CssBaseline, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

interface Props {
  children: React.ReactNode
}

const useStyles = makeStyles({
  sidebar: {
    display: "flex",
    flexDirection: "column",
  },
})

const Layout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item lg={1}>
            <Share round={true} iconSize={40} />
          </Grid>
          <Grid item lg={8} md={12}>
            {children}
          </Grid>
          <Grid item lg={3} md={12}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
