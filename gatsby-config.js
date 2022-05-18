module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-csv',
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'gu-analytics-nonprofits'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'sections',
        path: `${__dirname}/sections/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ['gatsby-remark-mathjax']
      }
    }
  ],
  siteMetadata: {
    siteUrl: 'http://gu-analytics-nonprofits.s3-website-us-east-1.amazonaws.com',
    title: 'Goergetown Data Science',
    titleTemplate: '%s · Analytics for Nonprofits',
    description: "The main webpage for Georgetown University's Analytics for Non Profits Group",
    image: '/images/icon.png'
  }
};
