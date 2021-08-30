const path = require(`path`)
const generateImageFromPageTitle = require("./src/util/generateImageFromPageTitle")

exports.createPages = async ({
  graphql,
  actions,
  getCache,
  createNodeId,
  cache,
  reporter,
}) => {
  const { createPage, createNode } = actions

  const blogPostTemplate = path.resolve(`./src/templates/post.js`)
  const categoryTemplate = path.resolve(`./src/templates/category.js`)
  const result = await graphql(
    `
      {
        allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
          edges {
            node {
              id
              slug
              title
              eyecatch {
                title
              }
              icons {
                values
              }
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

  const externalFluidImages = await generateImageFromPageTitle(
    posts,
    getCache,
    createNode,
    createNodeId,
    reporter,
    cache
  )

  posts.forEach(post => {
    createPage({
      path: `post/${post.node.slug}`,
      component: blogPostTemplate,
      context: {
        id: post.node.id,
        slug: post.node.slug,
        // contentfulはnextが古い投稿、previousになるので逆にする
        previous: post.next,
        next: post.previous,
        externalFluidImage: externalFluidImages.get(post.node.slug),
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

  // 記事一覧
  // 記事表示件数
  const postPerpage = 10
  const pagesCount = Math.ceil(posts.length / postPerpage) //ページ総数

  Array.from({ length: pagesCount }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/" : `/posts/${i + 1}`,
      component: path.resolve(`./src/templates/posts.js`),
      context: {
        skip: postPerpage * i,
        limit: postPerpage,
        currentPage: i + 1, // 現在のページ
        isFirstPage: i + 1 === 1, // 最初のページか
        isLastPage: i + 1 === pagesCount, // 最後のページか
      },
    })
  })
}
