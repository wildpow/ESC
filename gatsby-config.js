require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const cfg = {
  siteMetadata: {
    title: "E.S.C Mattress Center",
    siteUrl: `https://www.escmattresscenter.com`,
  },
  plugins: [
    "gatsby-plugin-preact",
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.GATSBY_DATO_API,
        preview: false,
        disableLiveReload: false,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
    //   options: {
    //     analyzerMode: `server`,
    //     analyzerPort: `8888`,
    //     devMode: true,
    //     disable: true,
    //   },
    // },
    // {
    //   resolve: "@bundle-analyzer/gatsby-plugin",
    //   options: { token: process.env.BUNDLE_ANALYZER_TOKEN },
    // },
    // {
    //   resolve: "gatsby-plugin-bundle-stats",
    //   options: {
    //     compare: true,
    //     json: true,
    //     outDir: "../artifacts",
    //     stats: {
    //       context: "./src",
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `E.S.C Mattress Center`,
        short_name: `E.S.C`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1565c0`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-source-apiserver",
      options: {
        // Type prefix of entities from server
        // typePrefix: "internal__",

        // The url, this should be the endpoint you are attempting to pull data from
        // url: process.env.GATSBY_REST2,

        // method: "post",

        // headers: {
        //   "Content-Type": "application/json",
        //   accept: "application/json",
        // },

        // Request body
        // data: {},

        // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
        // using this name. i.e. posts.json
        // name: `birdeye`,
        // Pass an array containing any number of the entity configuration properties (except verbose, auth0Config),
        // any not specified are defaulted to the general properties that are specified
        // Only available from version 2.1.0
        // Define schemaType to normalize blank values
        // example:

        entitiesArray: [
          {
            url: process.env.GATSBY_REST2,
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
              Connection: "keep-alive",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Max-Age": 3600,
            },
            name: `widget`,
          },
          {
            url: process.env.GATSBY_REST,
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
            },
            name: `aboutReviews`,
          },
        ],
      },
    },
  ],
};

if (process.env.CONTEXT === "production") {
  const googleAnalyticsCfg = {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: process.env.GATSBY_GOOGLE_ANALYTICS,
    },
  };
  cfg.plugins.push(googleAnalyticsCfg);
}

module.exports = cfg;
