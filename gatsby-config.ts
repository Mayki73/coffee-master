import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `coffeemaster`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/brands/icon-coffeeremont.png", // or the path to your favicon file
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/brands/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`,
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Signika"],
        },
      },
    },
  ],
};

export default config;
