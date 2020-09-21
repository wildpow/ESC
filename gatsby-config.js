require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.escmattresscenter.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

const cfg = {
  siteMetadata: {
    title: "E.S.C Mattress Center",
    siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.GATSBY_DATO_API,
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-datocms`,
            options: {
              linkImagesToOriginal: false,
              // tracedSVG: true,
              // withWebp: false,
              // quality: 80,
              // You need to specify your project read-only API token here!
              apiToken: process.env.GATSBY_DATO_API,
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              // maxWidth: 780,
              maxWidth: 780,
              wrapperStyle: "margin-top: 40px; margin-bottom: 20px;",

              // wrapperStyle: "padding-top: 20px; padding-bottom: 20px;",
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.escmattresscenter.com`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: `${process.env.GATSBY_SHOPIFY_STORE}.myshopify.com`,
        accessToken: process.env.GATSBY_SHOPIFY_API,
        verbose: true,
      },
    },
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
        icon: `src/images/squarePanda.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-lunr",
      options: {
        languages: [{ name: "en" }],
        fields: [
          { name: "title", store: true, attributes: { boost: 10 } },
          { name: "handle", store: true },
          { name: "productType", store: true, attributes: { boost: 20 } },
          { name: "vendor", store: true, attributes: { boost: 15 } },
        ],
        resolvers: {
          ShopifyProduct: {
            title: (node) => node.title,
            handle: (node) => node.handle,
            productType: (node) => node.productType,
            vendor: (node) => node.productType,
          },
        },
        filename: "search_index.json",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-remove-serviceworker`,
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
