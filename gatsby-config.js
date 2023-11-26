require("dotenv").config();

module.exports = {
  plugins: [
    "gatsby-plugin-netlify",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-preload-fonts",
      options: {
        crossOrigin: "use-credentials", // optional
        formats: ["gltf", "glb", "jpg", "png", "jpeg"], // add any other formats you want to preload
        usePreconnect: true, // optional
      },
    },
    `gatsby-plugin-image`,
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
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Kanit`,
                variants: [`300`, `400`, `500`, `700`],
              },
            ],
          },
        },
      },
    },
  ],
};
