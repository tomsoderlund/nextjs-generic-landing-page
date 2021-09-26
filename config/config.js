const packageJson = require('../package.json')
const manifest = require('../public/manifest.json')

const appSlug = packageJson.name
const serverPort = process.env.PORT || 3010

const completeConfig = {

  default: {
    serverPort,
    appSlug,
    appUrl: `https://${appSlug}.vercel.app/`,
    appName: manifest.name,
    appTagline: 'Best landing page template ever',
    appDescription: 'Best landing page template ever. A generic landing page template, built in Next.js (React) with static HTML export',
    appFeatures: [
      {
        name: 'Feature 1',
        description: 'This is the 1st important feature. This is totally amazing.',
        imageSrc: '/features/feature1.jpg',
        link: 'https://github.com/tomsoderlund/nextjs-generic-landing-page',
        target: '_blank'
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
    appProducts: [
      {
        reference: 'basic',
        name: 'Basic package',
        features: [
          'Complete source code',
          'Template ready to use'
        ],
        action: {
          label: 'Free download',
          href: 'https://github.com/tomsoderlund/nextjs-generic-landing-page',
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      },
      {
        reference: 'complete',
        name: 'Complete package',
        features: [
          'Support a developer',
          'Get gratitude'
        ],
        action: {
          label: '$9',
          href: 'https://ko-fi.com/tomsoderlund',
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      }
    ],
    locale: 'en_US',
    googleAnalyticsId: 'UA-XXXXXXX-X',
    googleSiteVerification: false,
    leadService: `https://login-as-a-service.vercel.app/api/${appSlug}/lead`
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
