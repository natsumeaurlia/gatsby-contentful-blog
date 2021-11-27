import React from "react"
import { Card, CardActions, CardContent, Typography } from "@mui/material"
import { graphql, Link, useStaticQuery } from "gatsby"
import Bio from "../bio"

import { categories, date, head, recent_posts, sidebar_heading, sidebar_item } from "./sidebar.module.scss"

const Sidebar = () => {
  const data = useStaticQuery<GatsbyTypes.SidebarQueryQuery>(graphql`
      query SidebarQuery {
          allContentfulBlogPost(
              sort: { fields: [publishDate], order: DESC }
              limit: 5
          ) {
              edges {
                  node {
                      id
                      slug
                      title
                      publishedDateJP: publishDate(formatString: "Y年MM月DD日")
                  }
              }
          }
          allContentfulCategory {
              edges {
                  node {
                      title
                      slug
                      id
                      createdJP: createdAt(formatString: "Y年MM月DD日")
                  }
              }
          }
      }
  `)

  const posts = data.allContentfulBlogPost.edges
  const allCategories = data.allContentfulCategory.edges
  return (
    <React.Fragment>
      <Card className={`${recent_posts} border-0`}>
        <CardContent>
          <Typography className={sidebar_heading}>最近の投稿</Typography>
          <CardActions>
            <ul>
              {posts.map(({ node }) => (
                <li>
                  <Link key={node.id} to={`/post/${node.slug}`}>
                    <h5 className={head}>{node.title}</h5>
                    <span className={date}>{node.publishedDateJP}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </CardActions>
        </CardContent>
      </Card>
      <Card className={sidebar_item + " border-0 mb-3"}>
        <CardContent>
          <Typography className={sidebar_heading}>運営者情報</Typography>
          <Bio></Bio>
        </CardContent>
      </Card>
      <Card className={sidebar_item + " border-0"}>
        <CardContent>
          <Typography className={sidebar_heading}>カテゴリー</Typography>
          <Typography>
            <ul className={categories}>
              {allCategories.map(({ node }) => (
                <li>
                  <Link key={node.id} to={`/category/${node.slug}`}>
                    {node.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  )
}

export default Sidebar
