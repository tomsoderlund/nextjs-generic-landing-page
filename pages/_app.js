import React from 'react'
import Router from 'next/router'

// Import global CSS files here
import 'public/app.css'
import 'public/theme.css'

import { googlePageview } from 'components/page/GoogleAnalytics'

Router.events.on('routeChangeComplete', path => googlePageview(path))

const MyApp = ({ Component, pageProps, router }) => {
  // props (Server + Client): Component, err, pageProps, router
  return (
    <Component
      {...pageProps}
      {...router}
    />
  )
}
export default MyApp
