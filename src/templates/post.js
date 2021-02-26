import React from "react"
import { Container, Row } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTags,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons"

import BlogPostStyles from "./post.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SNS from "../components/sns"
import { Col } from "react-bootstrap"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulBlogPost
  const categories = data.contentfulBlogPost.category

  const { previous, next } = pageContext
  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.content.childMarkdownRemark.excerpt}
        location={location}
        blogImagePath={`https:${post.eyecatch.file.url}`}
        ogImageWidth={post.eyecatch.file.details.image.width}
        ogImageHeight={post.eyecatch.file.details.image.height}
      />
      <article>
        <div className={BlogPostStyles.blog_post}>
          <div className={BlogPostStyles.title_group + " text-center py-5 px-3"}>
            <ul className={BlogPostStyles.post_info}>
              <li>
                <time dateTime={post.publishDate}>
                  {post.publishedDateJP}
                </time>
              </li>
            </ul>
            <h1 className="mt-3">{post.title}</h1>
          </div>
          <div className={BlogPostStyles.blog_thumb}>
            <Img
              style={{ height: "100%" }}
              fluid={post.eyecatch.fluid}
              alt={post.eyecatch.description}
            />
          </div>
          <div className={BlogPostStyles.blog_content}>
            <section
              dangerouslySetInnerHTML={{
                __html: post.content.childMarkdownRemark.html,
              }}
            />
            <div className="border-top" />
            <Row className="mt-5">
              <div className="col-6">
                <ul className={BlogPostStyles.post_category}>
                  <li className="mr-2">
                    <FontAwesomeIcon icon={faTags} />
                  </li>
                  {categories.map(c => (
                    <li key={c.id} className="mr-2">
                      <Link to={`/category/${c.slug}`}>{c.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Row>
          </div>
        </div>
      </article>
      <ul className="container d-flex justify-content-between">
        <li>
          {previous && (
            <Link
              className="btn_orange"
              to={`/post/${previous.slug}`}
              rel="prev"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              次へ
            </Link>
          )}
        </li>
        <li>
          <Link className="btn_orange" to="/" rel="top">
            Topへ
          </Link>
        </li>
        <li>
          {next && (
            <Link className="btn_orange" to={`/post/${next.slug}`} rel="prev">
              前へ
              <FontAwesomeIcon icon={faArrowRight} />
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
        childMarkdownRemark {
          excerpt(format: PLAIN, pruneLength: 200)
          html
          htmlAst
        }
      }
      eyecatch {
        fluid(maxWidth: 1600) {
          ...GatsbyContentfulFluid_withWebp
        }
        description
        file {
          details {
            image {
              width
              height
            }
          }
          url
        }
      }
    }
  }
`
