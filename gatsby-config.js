const copy = require('./src/components/withCopy/copy.json');
const { name, version } = require('./package.json');

const config = {
  siteMetadata: {
    author: '@mattiaerre',
    description: 'TODO-description',
    name,
    title: `${copy['Moving On Productions']} v${version}`,
    version
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name,
        short_name: name,
        start_url: '/',
        background_color: '#2d343a',
        theme_color: '#2d343a',
        icon: 'src/images/favicon.ico'
      }
    },
    'gatsby-plugin-react-svg'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ]
};

module.exports = config;
