import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogCard from "../components/card"

const Category = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata.title
  const category = data.contentfulCategory
  const posts = data.contentfulCategory.blogpost

  return (
    <Layout>
      <Seo
        title={`カテゴリ: ${category.title}の記事一覧`}
        description={`カテゴリ: ${category.title}の記事一覧`}
        location={location}
      />
      <div className="text-center p-5" style={{ color: "#7B7B7B" }}>
        <h1 className="p-3">カテゴリー: {category.title}</h1>
      </div>
      <section className="d-flex flex-wrap justify-content-around mt-n4">
        {posts.map(post => {
          return (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.content.childMarkdownRemark.excerpt}
              categories={post.category}
              publishDate={post.publishedDateJP}
              slug={post.slug}
              eyecatch={post.eyecatch}
            />
          )
        })}
      </section>
    </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query CategoryQuery($id: String!) {
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
        }
      }
    }
  }
`
