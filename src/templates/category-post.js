import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCard from "../components/blog-card"

const Category = ({ data }) => {
  // const siteTitle = data.site.siteMetadata.title
  const category = data.contentfulCategory
  const posts = data.contentfulCategory.blogpost

  return (
    <Layout>
      <div className="text-center p-5" style={{ color: "#7B7B7B" }}>
        <ul>
          <li>
            <time dateTime={category.createdAt}>{category.createdJP}</time>
          </li>
        </ul>
        <h1 className="p-3">Category: {category.title}</h1>
      </div>
      {posts.map(post => {
        return (
          <BlogCard
            key={post.id}
            title={post.title}
            excerpt={post.content.content}
            categories={post.category}
            publishDate={post.publishedDateJP}
            readMore={post.slug}
            eyecatch={post.eyecatch.fluid}
            eyecatchDescription={post.eyecatch.description}
          />
        )
      })}
    </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query($id: String!) {
    contentfulCategory(id: { eq: $id }) {
      id
      slug
      title
      createdJP: createdAt(formatString: "Y年MM月DD日")
      createdAt
      blogpost {
        id
        slug
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
  }
`
