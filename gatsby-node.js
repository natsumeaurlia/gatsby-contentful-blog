const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const categoryTemplate = path.resolve(`./src/templates/category-post.js`)
  const result = await graphql(
    `
      {
        allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
          edges {
            node {
              id
              slug
            }
            next {
              title
              slug
            }
            previous {
              title
              slug
            }
          }
        }
        allContentfulCategory {
          edges {
            node {
              slug
              id
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allContentfulBlogPost.edges
  const categories = result.data.allContentfulCategory.edges

  posts.forEach((post, next, previous) => {
    createPage({
      path: `post/${post.node.slug}`,
      component: blogPostTemplate,
      context: {
        id: post.node.id,
        slug: post.node.slug,
        previous,
        next,
      },
    })
  })
  categories.forEach(category => {
    createPage({
      path: `category/${category.node.slug}`,
      component: categoryTemplate,
      context: {
        id: category.node.id,
        slug: category.node.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `allContentfulBlogPost`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: `slug`,
    })
  }
}
