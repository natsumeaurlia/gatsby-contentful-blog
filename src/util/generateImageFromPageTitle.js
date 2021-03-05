const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const { fluid } = require(`gatsby-plugin-sharp`);
const dotenv = require('dotenv');

if (process.env.ENVIRONMENT !== "production") {
    dotenv.config()
}


module.exports = async (pages, getCache, createNode, createNodeId, reporter, cache) => {
    const featureImages = new Map();

    await Promise.all(pages.map(async (page) => {
        const { node } = page;
        const url = `${process.env.OPEN_GRAPH_GENERATE_API}${encodeURIComponent(node.title)}.png?md=1&fontSize=100px&background&fontColor=#777`

        if (featureImages.has(node.slug) || node.eyecatch) {
            return;
        }

        const fileNode = await createRemoteFileNode({
            url: url,
            parentNodeId: node.id,
            getCache,
            createNode,
            createNodeId,
            name: node.title
        });

        const generatedImage = await fluid({
            file: fileNode,
            reporter,
            cache,
        });

        featureImages.set(node.slug, generatedImage);
    }))
    return featureImages;
};