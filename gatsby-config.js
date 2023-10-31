/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config();
module.exports = {
  siteMetadata: {
    title: `Vervoerregio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WebSite", // Corrected type name
        fieldName: "website",
        url: "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clbe0zp4u2fkz01uj486xdza4/master",
        headers: {
          Authorization: `Bearer ${process.env.GATSBY_API_KEY}`,
        },
      },
    },
  ],
};
