/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      resolve: `gatsby-plugin-styled-components`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}