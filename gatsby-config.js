require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Airdrie Furniture Revival`,
    description: `Airdrie Furniture Revival.`,
    author: `@switchback4ever`,
    metaImg: `src/images/airdrie-furniture-revival-seo-meta-image.png`,
    siteLogo: `src/images/airdrie-furniture-revival.png`,
    siteUrl: `https://airdriefurniturerevival.ca/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: process.env.GATSBY_URL,
        protocol: process.env.GATSBY_PROTOCOL,
        hostingWPCOM: false,
        useACF: true,
        includedRoutes: [
          "**/media",
          "**/pages",
          "**/wp-api-menus/v2",
          "**/wp-api-menus/v2/menus",
          "**/testimonials",
          "**/gallery",
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://airdriefurniturerevival.ca/",
        sitemap: "https://airdriefurniturerevival.ca/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://airdriefurniturerevival.ca/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
