import React from "react"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCard from "../components/blog-card"

const Posts = ({ data, location, pageContext }) => {
  // const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <SEO
        title="N's Dump Logs"
        description="現役フリーランスエンジニアの勉強・備忘録。
            バックエンドがメイン。フロントからインフラまで興味があり、色々やっています"
        location={location}
      />
      {posts.map(({ node }) => {
        return (
          <BlogCard
            key={node.id}
            title={node.title}
            excerpt={node.content.childMarkdownRemark.excerpt}
            publishDate={node.publishedDateJP}
            categories={node.category}
            readMore={node.slug}
            eyecatch={node.eyecatch.fluid}
            eyecatchDescription={node.eyecatch.description}
          />
        )
      })}
      <ul className="d-flex justify-content-around">
        <li>
          {!pageContext.isFirstPage && (
            <Link
              className="btn_orange"
              to={
                pageContext.currentPage === 2
                  ? `/`
                  : `/posts/${pageContext.currentPage - 1}/`
              }
              rel="prev"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              前のページへ
            </Link>
          )}
        </li>
        <li>
          {!pageContext.isLastPage && (
            <Link
              className="btn_orange"
              to={`/posts/${pageContext.currentPage + 1}`}
              rel="prev"
            >
              次のページへ
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  )
}

export default Posts

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          slug
          title
          publishedDateJP: publishDate(formatString: "Y年MM月DD日")
          eyecatch {
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_withWebp
            }
            description
          }
          category {
            id
            title
            slug
          }
          content {
            childMarkdownRemark {
              excerpt(format: PLAIN, pruneLength: 200)
              html
              htmlAst
            }
          }
        }
      }
    }
  }
`
