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
      <SEO
        title={post.title}
        description={post.content.childMarkdownRemark.excerpt}
        location={location}
        blogImagePath={`https:${post.eyecatch.file.url}`}
        ogImageWidth={post.eyecatch.file.details.image.width}
        ogImageHeight={post.eyecatch.file.details.image.height}
      />
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
                  ></section>
                  <div className={CardStyles.post_options}>
                    <Row>
                      <div className="col-6">
                        <ul className={CardStyles.post_tags}>
                          <li className="mr-2">
                            <FontAwesomeIcon icon={faTags} />
                          </li>
                          {categories.map(c => (
                            <li key={c.id}>
                              <Link to={`/category/${c.slug}`}>{c.title}</Link>
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
      <ul className="d-flex justify-content-between">
        <li>
          {previous && (
            <Link
              className="btn_orange"
              to={`/post/${previous.slug}`}
              rel="prev"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              前へ
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
              次へ
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
