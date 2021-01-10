// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`
});
require("ts-node").register({ files: true });

const clientConfig = require("./client-config");
const token = process.env.SANITY_READ_TOKEN;

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
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-codegen`
  ]
};
