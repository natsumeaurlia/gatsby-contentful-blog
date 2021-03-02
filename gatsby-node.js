const path = require(`path`)
const dotenv = require('dotenv');
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const { fluid } = require(`gatsby-plugin-sharp`);

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config()
}

exports.createPages = async ({ graphql, actions, getCache, createNodeId, cache, reporter }) => {
  const { createPage, createNode } = actions; 

  const generateImages = async (pages) => {
    const featureImages = new Map();

    for (const page of pages) {
      const { node } = page;
      const url = `${process.env.OPEN_GRAPH_GENERATE_API}${encodeURIComponent(node.title)}.png?md=1&fontSize=100px&background&fontColor=#777`

      if (featureImages.has(node.slug)) {
        return;
      }

      const fileNode = await createRemoteFileNode({
        url: url,
        parentNodeId: node.id,
        getCache,
        createNode,
        createNodeId,
      });

      const generatedImage = await fluid({
        file: fileNode,
        reporter,
        cache,
      });

      featureImages.set(node.slug, generatedImage);
    }

    return featureImages;
  };

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

  const externalfluidImages = await generateImages(posts);

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
        externalfluidImage: externalfluidImages.get(post.node.slug),
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
        externalfluidImages: externalfluidImages,
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
        externalfluidImages: externalfluidImages,
      },
    })
  })
}
