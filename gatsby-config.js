/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Title from siteMetaData'
  },
  plugins: [
    {	
      resolve: `gatsby-plugin-styled-components`,
      options: {
        pathToConfigModule: `src/utils/typography`,	        
      },
    }
  ]
}