module.exports = {
    siteMetadata: {
        title: `Gatsby Blog`,
        description: `A new Blog`,
        author: `Hani A.Z`,
        siteUrl: `https://heuristic-northcutt-612183.netlify.com`,
    },
    plugins: [
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-plugin-styled-components',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',

        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/posts`,
                name: 'posts',
            },
        },
        'gatsby-transformer-remark',
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-netlify`,
    ],
}
