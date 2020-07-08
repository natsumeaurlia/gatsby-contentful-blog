import React from "react"
import { Container, Row, Button } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTags,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons"

import CardStyles from "./blog-post.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulBlogPost
  const categories = data.contentfulBlogPost.category
  // const siteTitle = data.site.siteMetadata.title

  const { previous, next } = pageContext
  return (
    <Layout>
      <article className={CardStyles.blog_posts + " " + CardStyles.grid_system}>
        <Container>
          <Row>
            <div className="col-lg-12">
              <div className={CardStyles.blog_post}>
                <div className={CardStyles.title_group + " text-center p-5"}>
                  <ul className={CardStyles.post_info}>
                    <li>
                      <time dateTime={post.publishDate}>
                        {post.publishedDateJP}
                      </time>
                    </li>
                  </ul>
                  <h1 className="p-3">{post.title}</h1>
                </div>
                <div className={CardStyles.blog_thumb}>
                  <Img
                    style={{ height: "100%" }}
                    fluid={post.eyecatch.fluid}
                    alt={post.eyecatch.description}
                  />
                </div>
                <div className={CardStyles.down_content}>
                  <section
                    className={CardStyles.blog_head}
                    dangerouslySetInnerHTML={{
                      __html: post.content.childMarkdownRemark.html,
                    }}
                  />
                  <div className={CardStyles.post_options}>
                    <Row>
                      <div className="col-6">
                        <ul className={CardStyles.post_tags}>
                          <li>
                            <FontAwesomeIcon icon={faTags} />
                          </li>
                          {categories.map(c => (
                            <li key={c.id} className={c.slug}>
                              {c.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul className={CardStyles.post_share}></ul>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </article>
      <ul className="d-flex justify-content-around">
        <li>
          {next.slug && (
            <Link className="btn_orange" to={`post/${next.slug}`} rel="prev">
              <FontAwesomeIcon icon={faArrowLeft} />
              {next.title}
            </Link>
          )}
        </li>
        <li>
          <Link className="btn_orange" to="/" rel="top">
            一覧へ
          </Link>
        </li>
        <li>
          {previous.slug && (
            <Link
              className="btn_orange"
              to={`post/${previous.slug}`}
              rel="prev"
            >
              <FontAwesomeIcon icon={faArrowRight} />
              {previous.title}
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      publishedDateJP: publishDate(formatString: "Y年MM月DD日")
      publishDate
      category {
        title
        slug
        id
      }
      content {
        content
        childMarkdownRemark {
          html
          htmlAst
        }
      }
      eyecatch {
        fluid(maxWidth: 1600) {
          ...GatsbyContentfulFluid_withWebp
        }
        description
      }
    }
  }
`
