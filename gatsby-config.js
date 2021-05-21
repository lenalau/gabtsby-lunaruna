require('dotenv').config({
    path: `.env`,
})

module.exports = {
    siteMetadata: {
        title: 'lunaruna',
        // titleTemplate: 'lunaruna.com | %s',
        description: '',
        siteUrl: 'https://lunaruna.com', // No trailing slash allowed!,
        url: 'lunaruna.com', // No trailing slash allowed!, 
        image: ''
    },
    plugins: [
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-source-prismic`,
            options: {
                repositoryName: 'lunaruna',
                prismicToolbar: true,
                accessToken: process.env.PRISMIC_ACCESS_TOKEN,

                // linkResolver: () => prismicLinkResolver,
                schemas: {
                    home: require("./src/schemas/home.json"),
                    sidraartesanal: require("./src/schemas/sidraartesanal.json")
                }
            }
        }
    ]
}