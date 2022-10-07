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
    appTagline: 'The best landing page template',
    appDescription: 'A generic landing page template, built in Next.js (React) with static HTML export.',
    appFeatures: [
      {
        name: 'Great starting point',
        description: 'Great starting point for a landing page or simple website.',
        imageSrc: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZmZlZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
        link: 'https://github.com/tomsoderlund/nextjs-generic-landing-page',
        target: '_blank'
      },
      {
        name: 'Export HTML',
        description: 'Use `yarn export` to export pure HTML pages.',
        imageSrc: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        name: 'Easy to customize',
        description: 'Change content and CSS styles easily.',
        imageSrc: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
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
          label: 'Donate $9',
          href: 'https://ko-fi.com/tomsoderlund',
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      }
    ],
    appTestimonials: [
      {
        name: 'Ida Lowry',
        description: '“I loved it!”',
        imageSrc: 'https://screens.tomorroworld.com/image?width=400&height=240&dpr=1&time=networkidle0&url=https://m.media-amazon.com/images/M/MV5BZTc0ZjU5ZWEtYzVhZC00N2QwLWE4OWQtYzExMGZiYWJiNDAwXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg'
      },
      {
        name: 'Sam Lowry',
        description: '“This was amazing!”',
        imageSrc: 'https://screens.tomorroworld.com/image?width=400&height=240&dpr=1&time=networkidle0&url=https://m.media-amazon.com/images/M/MV5BMjU5ZWFjZWMtNjRjZi00ZGFiLWI4NmUtNmRiMDU1MmEwZDMwXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg'
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
