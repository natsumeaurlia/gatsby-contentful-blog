const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const { fluid } = require(`gatsby-plugin-sharp`);
const dotenv = require('dotenv');

if (process.env.ENVIRONMENT !== "production") {
    dotenv.config()
}

const bg = [
    'https://ntm-images.s3-ap-northeast-1.amazonaws.com/flower-3175428_1280.jpg',
    'https://ntm-images.s3-ap-northeast-1.amazonaws.com/lime-2481346_1280.jpg',
    'https://ntm-images.s3-ap-northeast-1.amazonaws.com/ogp_base.jpg',
    'https://ntm-images.s3-ap-northeast-1.amazonaws.com/scott-webb-hDyO6rr3kqk-unsplash.jpg',
    'https://ntm-images.s3-ap-northeast-1.amazonaws.com/water-1330252_640.jpg',
]

module.exports = async (pages, getCache, createNode, createNodeId, reporter, cache) => {
    const featureImages = new Map();

    for (page of pages) {
        const { node } = page;
        const icons = node.icons;
        const random = Math.floor(Math.random() * bg.length - 1);
        const image = bg[random] ? bg[random] : '';

        let url = `${process.env.OPEN_GRAPH_GENERATE_API}${encodeURIComponent(node.title)}.png?md=1&fontSize=100px&background=${image}&fontColor=${encodeURIComponent('#696969')}`
        if (icons && icons.values) {
            for (icon of icons.values) {
                url = url + '&icons=' + icon;
            }
        }

        if (featureImages.has(node.slug) || node.eyecatch) {
            continue;
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
        console.info('generate image from api', decodeURI(url));
    }
    return featureImages;
};