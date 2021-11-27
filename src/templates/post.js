import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft"
import ArrowRightIcon from "@mui/icons-material/ArrowRight"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"

import { blog_content, blog_post, blog_thumb, post_category, post_info, title_group } from "./post.module.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulBlogPost
  const categories = data.contentfulBlogPost.category
  const imagePath = post.eyecatch
    ? `https:${post.eyecatch.file.url}`
    : `${pageContext.externalFluidImage.src}`
  const width = post.eyecatch ? post.eyecatch.file.details.image.width : 1280
  const height = post.eyecatch ? post.eyecatch.file.details.image.height : 640

  const { previous, next } = pageContext
  return (
    <Layout>
      <Seo
        title={post.title}
        description={post.content.childMarkdownRemark.excerpt}
        location={location}
        blogImagePath={imagePath}
        ogImageWidth={width}
        ogImageHeight={height}
      />
      <article>
        <div className={blog_post}>
          <div className={title_group + " text-center py-5 px-3"}>
            <ul className={post_info}>
              <li>
                <time dateTime={post.publishDate}>{post.publishedDateJP}</time>
              </li>
            </ul>
            <h1 className="mt-3">{post.title}</h1>
          </div>
          <div className={blog_thumb}>
            {post.eyecatch ? (
              <Img
                style={{ height: "100%" }}
                fluid={post.eyecatch.fluid}
                alt={post.eyecatch.description}
              />
            ) : (
              <Img
                style={{ height: "100%" }}
                fluid={pageContext.externalFluidImage}
                alt={post.title}
              />
            )}
          </div>
          <div className={blog_content}>
            <section
              dangerouslySetInnerHTML={{
                __html: post.content.childMarkdownRemark.html
              }}
            />
            <div className="border-top" />
            <div className="mt-5">
              <div className="col-6">
                <ul className={post_category}>
                  <li className="mr-2">
                    <LocalOfferIcon />
                  </li>
                  {categories.map(c => (
                    <li key={c.id} className="mr-2">
                      <Link to={`/category/${c.slug}`}>{c.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
      <ul className="container d-flex justify-content-between">
        <li>
          {next && (
            <Link className="btn_orange" to={`/post/${next.slug}`} rel="next">
              <ArrowLeftIcon />
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
          {previous && (
            <Link
              className="btn_orange"
              to={`/post/${previous.slug}`}
              rel="prev"
            >
              前へ
              <ArrowRightIcon />
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query Post($id: String!) {
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
