import React from "react"
import { Nav, Card } from "react-bootstrap"
import { useStaticQuery, Link, graphql } from "gatsby"
import Bio from "./bio"

import {
  recent_posts,
  sidebar_heading,
  sidebar_item,
  head,
  date,
  categories,
  // @ts-ignore
} from "./sidebar.module.scss"

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
        <Card.Body>
          <Card.Title className={sidebar_heading}>最近の投稿</Card.Title>
          <Card.Text>
            <Nav>
              {posts.map(({ node }) => (
                <Nav.Link key={node.id} as={Link} to={`/post/${node.slug}`}>
                  <h5 className={head}>{node.title}</h5>
                  <span className={date}>{node.publishedDateJP}</span>
                </Nav.Link>
              ))}
            </Nav>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className={sidebar_item + " border-0 mb-3"}>
        <Card.Body>
          <Card.Title className={sidebar_heading}>運営者情報</Card.Title>
          <Bio></Bio>
        </Card.Body>
      </Card>
      <Card className={sidebar_item + " border-0"}>
        <Card.Body>
          <Card.Title className={sidebar_heading}>カテゴリー</Card.Title>
          <Card.Text>
            <Nav className={categories}>
              {allCategories.map(({ node }) => (
                <Nav.Link key={node.id} as={Link} to={`/category/${node.slug}`}>
                  {node.title}
                </Nav.Link>
              ))}
            </Nav>
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default Sidebar
