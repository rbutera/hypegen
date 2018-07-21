// Plugins
const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'Hypegen Landing Page',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [autoprefixer()],
        precision: 8,
      },
    },
  ],
};
