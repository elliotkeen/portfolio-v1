/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `portfolio-v2`,
    description: `Hi, my name is Elliot. I'm a Security Engineer I'm a Security Engineer specializing in ethical hacking, penetration testing, and vulnerability assessments to elevate security defenses.`,
    author: `@ekeen`,
    siteUrl: `https://www.ekeen.info`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/favicon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "src/images/"
    },
    __key: "images"
  }]
};
