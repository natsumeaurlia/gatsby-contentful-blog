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
import Layout from "../components/postLayout"
import SEO from "../components/seo"
import SNS from "../components/sns"

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
      <article className={BlogPostStyles.blog_posts + " " + BlogPostStyles.grid_system}>
        <Container>
          <Row>
            <div className="col-lg-12">
              <div className={BlogPostStyles.blog_post}>
                <div className={BlogPostStyles.title_group + " text-center p-5"}>
                  <ul className={BlogPostStyles.post_info}>
                    <li>
                      <time dateTime={post.publishDate}>
                        {post.publishedDateJP}
                      </time>
                    </li>
                  </ul>
                  <h1 className="p-3">{post.title}</h1>
                </div>
                <div className={BlogPostStyles.blog_thumb}>
                  <Img
                    style={{ height: "100%" }}
                    fluid={post.eyecatch.fluid}
                    alt={post.eyecatch.description}
                  />
                </div>
                <div className={BlogPostStyles.down_content}>
                  <section
                    className={
                      BlogPostStyles.blog_head + " " + BlogPostStyles.blog_content
                    }
                    dangerouslySetInnerHTML={{
                      __html: post.content.childMarkdownRemark.html,
                    }}
                  ></section>
                  <div className="border-top" />
                  <div className={BlogPostStyles.post_options}>
                    <Row className="d-lg-none d-flex justify-content-center mt-5">
                      <SNS />
                    </Row>
                    <Row className="mt-5">
                      <div className="col-6">
                        <ul className={BlogPostStyles.post_tags}>
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
              </div>
            </div>
          </Row>
        </Container>
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
