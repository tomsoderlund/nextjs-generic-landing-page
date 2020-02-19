import Head from 'next/head'

import manifest from '../public/manifest.json'
import { config } from '../config/config'

const PageHead = ({ title, appName = config.appName, appTagline = config.appTagline, appDescription = config.appDescription }) => {
  const pageTitle = title
    ? `${title} – ${config.appName}`
    : `${appName} – ${appTagline}`

  const iconUrl = '/icon.png'
  const thumbnailUrl = '/features/feature1.jpg'
  const fonts = [
    ['Source Sans Pro', '400,600']
  ]

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name='description' content={appDescription} />

      <meta charSet='utf-8' />
      <meta httpEquiv='content-language' content={config.locale.split('_')[0]} />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />

      <link rel='manifest' href='/manifest.json' />

      {fonts.map(font => <link key={font[0]} rel='stylesheet' href={`https://fonts.googleapis.com/css?family=${`${font[0].replace(/ /g, '+')}${font[1] ? ':' + font[1] : ''}`}&display=swap`} />)}
      <link rel='stylesheet' href='/app.css' />
      <link rel='stylesheet' href='/theme.css' />

      <link rel='shortcut icon' type='image/x-icon' href={iconUrl} />

      <meta property='og:site_name' content={appName} />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={appDescription} />
      <meta property='og:locale' content={config.locale} />
      <meta property='og:image' content={thumbnailUrl} />

      <link rel='apple-touch-icon' href={iconUrl} />
      {(manifest.display === 'standalone') ? <meta name='apple-mobile-web-app-capable' content='yes' /> : null}
      <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
      <meta name='apple-mobile-web-app-title' content={appName} />

      {/*
      <link rel='apple-touch-startup-image' href='' />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content='@TwitterName' />
      <meta name='twitter:site' content='@TwitterName' />

      <link rel='canonical' href={websiteUrl} />
      <meta property='og:url' content={websiteUrl} />
    */}

      {config.googleSiteVerification ? <meta name='google-site-verification' content={config.googleSiteVerification} /> : null}

    </Head>
  )
}
export default PageHead
