module.exports = {
  siteMetadata: {
    title: 'Gatsby + WordPress Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    // {
    //   // follow this:  https://www.gatsbyjs.com/plugins/gatsby-plugin-react-i18next/
    //   // or this if you decided to not use the plugin:  https://medium.com/@makerspirit/step-by-step-guide-to-use-i18next-in-gatsby-app-19d21f2b723d
    //   resolve: `gatsby-plugin-react-i18next`,
    //   options: {
    //     path: `${__dirname}/src/locales`,
    //     languages: [`en`, `da`],
    //     defaultLanguage: `en`,

    //     // you can pass any i18next options
    //     // pass following options to allow message content as a key
    //     i18nextOptions: {
    //       interpolation: {
    //         escapeValue: false, // not needed for react as it escapes by default
    //       },
    //       keySeparator: false,
    //       nsSeparator: false,
    //     },
    //     pages: [
    //       {
    //         matchPath: '/area',
    //         getLanguageFromPath: true,
    //         languages: ['en', 'da'],
    //         // excludeLanguages: ['es'],
    //       },
    //       {
    //         matchPath: '/',
    //         languages: ['en', 'da'],
    //       },
    //     ],
    //   },
    // },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: 'http://infosysoft.com/admin-animesh/graphql',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // {
    //   // Removes unused css rules
    //   resolve:'gatsby-plugin-purgecss',
    //   options: {
    //     // Activates purging in gatsby develop
    //     develop: true,
    //     // Purge only the main css file
    //     purgeOnly: ['/all.sass'],
    //   },
    // }, // must be after other CSS plugins
    // 'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
