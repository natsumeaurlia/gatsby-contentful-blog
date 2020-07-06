import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCard from "../components/blog-card"

const BlogIndex = ({ data }) => {
  // const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulBlogPost.edges

  return (
    <Layout>
      {posts.map(({ node }) => {
        return (
          <BlogCard
            key={node.id}
            title={node.title}
            excerpt={node.content.json}
            publishDate={node.publishedDateJP}
            readMore={node.slug}
            eyecatch={node.eyecatch.fluid}
            eyecatchDescription={node.eyecatch.description}
          />
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
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
          content {
            json
          }
        }
      }
    }
  }
`
