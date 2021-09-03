import React from 'react'
import App from 'next/app'
import Router from 'next/router'

// Import global CSS files here
import 'public/app.css'
import 'public/theme.css'

import { googlePageview } from 'components/page/GoogleAnalytics'

Router.events.on('routeChangeComplete', path => googlePageview(path))

export default class MyApp extends App {
  render () {
    const { Component, pageProps, router } = this.props
    return (
      <Component {...pageProps} query={router.query} />
    )
  }
}
