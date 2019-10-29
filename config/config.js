const packageJson = require('../package.json')
const manifest = require('../public/manifest.json')

const appSlug = packageJson.name
const serverPort = process.env.PORT || 3124

const completeConfig = {

  default: {
    serverPort,
    appSlug,
    appUrl: process.env.APP_URL || '', // Used for GraphQL url - see graphql/apollo.js. Not used/needed by Zeit Now.
    appName: manifest.name,
    appTagline: 'Best landing page template ever',
    appDescription: 'Next.js serverless PWA with GraphQL (Apollo) and Postgres SQL boilerplate',
    appFeatures: [
      {
        name: 'Feature 1',
        description: 'This is the 1st important feature. This is totally amazing.',
        image: 'feature1.jpg'
      },
      {
        name: 'Feature 2',
        description: 'This is the 2nd important feature. This is totally amazing.',
        image: 'feature2.jpg'
      },
      {
        name: 'Feature 3',
        description: 'This is the 3rd important feature. This is totally amazing.',
        image: 'feature3.jpg'
      }
    ],
    locale: 'en_US',
    googleAnalyticsId: 'UA-XXXXXXX-X',
    googleSiteVerification: false,
    databaseUrl: process.env.DATABASE_URL || `postgresql://localhost/${appSlug}`,
    graphqlPath: '/api/graphql'
  },

  development: {
    appUrl: `http://localhost:${serverPort}/`,
    googleAnalyticsId: null
  },

  production: {
  }

}

// Public API
module.exports = {
  config: { ...completeConfig.default, ...completeConfig[process.env.NODE_ENV] },
  completeConfig
}
