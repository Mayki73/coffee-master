import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `coffeeremont24`,
    description: "Ремонт кофемашин и кофеварок в Минске",
    siteUrl: `https://www.coffeeremont24.by`,
    image: "src/images/brands/icon-coffeeremont.png",
    lang: "ru",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NB3DKQBK",
        includeInDevelopment: false,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WRB5QK9S", // Replace with your second GTM container ID
        includeInDevelopment: false, // Set to true if you want to include in development mode
        defaultDataLayer: { platform: "gatsby" }, // Optional
      },
    },
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
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap.xml", // Output path for the sitemap
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
