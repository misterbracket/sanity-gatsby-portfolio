// Load variables from `.env` as soon as possible
import dotenv from 'dotenv';
require("ts-node").register({ files: true });

dotenv.config({ path: '.env' });

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteMetadata: {
    title: `MK`,
    siteUrl: `https://maximilianklammer.com`,
    description: `Welcome to my Portfolio Website`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        // eslint-disable-next-line global-require
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })]
      }
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID || "4t789e8u",
        dataset: process.env.GATSBY_SANITY_DATASET || "production",
        token : process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-537S6M6",
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-codegen`,
    'gatsby-plugin-styled-components',
    "gatsby-plugin-react-helmet",
  ]
};
