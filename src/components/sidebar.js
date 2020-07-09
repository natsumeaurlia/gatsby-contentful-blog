import React from "react"
import { Row, Nav } from "react-bootstrap"
import { useStaticQuery, Link, graphql } from "gatsby"

import Styles from "./sidebar.module.css"

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
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
  const categories = data.allContentfulCategory.edges
  return (
    <div className={Styles.sidebar}>
      <Row>
        <div className="col-lg-12">
          <div className={Styles.sidebar_item + " " + Styles.recent_posts}>
            <div className={Styles.sidebar_heading}>
              <h2>Recent Posts</h2>
            </div>
            <div className="content">
              <Nav>
                {posts.map(({ node }) => (
                  <Nav.Link key={node.id} as={Link} to={`/post/${node.slug}`}>
                    <h5 className={Styles.head}>{node.title}</h5>
                    <span className={Styles.date}>{node.publishedDateJP}</span>
                  </Nav.Link>
                ))}
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
                {categories.map(({ node }) => (
                  <Nav.Link
                    key={node.id}
                    as={Link}
                    to={`/category/${node.slug}`}
                  >
                    {node.title}
                  </Nav.Link>
                ))}
              </Nav>
            </div>
          </div>
        </div>
      </Row>
    </div>
  )
}

export default Sidebar
