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
    appDescription: 'A generic landing page template, built in Next.js (React) with static HTML export',
    appFeatures: [
      {
        name: 'Feature 1',
        description: 'This is the 1st important feature. This is totally amazing.',
        imageSrc: '/features/feature1.jpg'
      },
      {
        name: 'Feature 2',
        description: 'This is the 2nd important feature. This is totally crazy amazing.',
        imageSrc: '/features/feature2.jpg'
      },
      {
        name: 'Feature 3',
        description: 'This is the 3rd important feature. This is totally insanely amazing.',
        imageSrc: '/features/feature3.jpg'
      }
    ],
    locale: 'en_US',
    googleAnalyticsId: 'UA-XXXXXXX-X',
    googleSiteVerification: false,
    databaseUrl: process.env.DATABASE_URL || `postgresql://localhost/${appSlug}`,
    graphqlPath: '/api/graphql',
    leadService: `https://login-as-a-service.now.sh/api/${appSlug}/lead`
  },

  development: {
    appUrl: `http://localhost:${serverPort}/`,
    googleAnalyticsId: null
    // loginService: `http://localhost:3002/api/${appSlug}`
  },

  production: {
  }

}

// Public API
module.exports = {
  config: { ...completeConfig.default, ...completeConfig[process.env.NODE_ENV] },
  completeConfig
}
