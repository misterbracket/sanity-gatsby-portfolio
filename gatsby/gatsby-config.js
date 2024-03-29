// Load variables from `.env` as soon as possible
import dotenv from "dotenv";
require("ts-node").register({ files: true });
const capitalize = require(`remark-capitalize`);

dotenv.config({ path: ".env" });

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  flags: {
    FAST_DEV: true,
  },
  siteMetadata: {
    title: `MK`,
    siteUrl: `https://maxklammer.com/`,
    description: `Welcome to my personal website. It is the place where you can find my latest projects, my resume and contact information. I also started blogging a little.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        // eslint-disable-next-line global-require
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID || "4t789e8u",
        dataset: process.env.GATSBY_SANITY_DATASET || "production",
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-537S6M6",
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-typescript`,
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    //Used to get the data like MDX from the local filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    //Used use to integrate Gastby with MDX
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-images`,
        ],
        remarkPlugins: [capitalize],
      },
    },
    //Used for image processing from the local file system
    `gatsby-plugin-sharp`,
    //Used from importing images in MDX
    `gatsby-remark-images`,
    //Used for Embedding CodeSandBox and Tweets etc.
    `gatsby-plugin-mdx-embed`,
  ],
};
