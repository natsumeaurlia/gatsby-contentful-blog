import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulBlogPost
  const categories = data.contentfulBlogPost.category
  // const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout>
      <section>
        <figure>
          <Img
            fluid={post.eyecatch.fluid}
            alt={post.eyecatch.desctiption}
          ></Img>
        </figure>
      </section>
      <article>
        {post.title}

        <aside>
          <time dateTime={post.publishDate}>{post.publishedDateJP}</time>
        </aside>
        <section>{documentToReactComponents(post.content.json)}</section>
        <footer>
          カテゴリ
          <ul>
            {categories.map(c => (
              <li key={c.id} className={c.slug}>
                {c.title}
              </li>
            ))}
          </ul>
        </footer>
      </article>
      <ul>
        <li>
          {previous && (
            <Link to={previous.slug} rel="prev">
              ← {previous.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.slug} rel="next">
              {next.title} →
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
        json
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
