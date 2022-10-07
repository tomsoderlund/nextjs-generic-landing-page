// External packages used:
//   yarn add react-share react-twitter-embed react-fb-like
import React from 'react'
import { SocialShareAndFollow } from 'react-share-follow'

import {
  PageHead,
  Block,
  Features,
  Footer,
  Headline,
  Image,
  Pricing,
  SignupBlock,
  Testimonials,
  Video
} from 'components'

import { config } from 'config/config'

const LandingPage = () => (
  <main>
    <PageHead />

    <Headline
      title={config.appTagline}
      description={config.appDescription}
    >
      <SocialShareAndFollow
        title={config.appName}
        description={config.appDescription}
        iconColor='#555555'
        share={{
          copy: true,
          email: true,
          sms: false,
          facebook: true,
          twitter: true,
          reddit: false,
          pinterest: false,
          linkedin: true
        }}
        follow={{
          web: 'https://www.tomorroworld.com/',
          twitter: 'TomorroworldAB',
          instagram: 'tomsoderlund',
          linkedin: 'company/tomorroworld'
        }}
        onShare={({ message }) => window.alert(message)}
      />
    </Headline>

    <CustomSignupBlock />

    <Block padding='2em 1em'>
      Get the source code from <a className='button' href='https://github.com/tomsoderlund/nextjs-generic-landing-page' target='_blank' rel='noopener noreferrer'>GitHub</a>
    </Block>

    <Image
      src='/features/feature1.jpg'
      fullWidth={false}
    />

    <Features
      features={config.appFeatures}
      fullWidth={false}
    />

    <Pricing
      products={config.appProducts}
    />

    <Video
      src='https://www.youtube.com/embed/vEc1tm7novI'
      controls={false}
      fullWidth={false}
    />

    <Testimonials
      headline='What our customers are saying'
    />

    <CustomSignupBlock />

    <Footer>
      &copy; Company, Inc. | <a href='https://www.tomorroworld.com/' target='_blank' rel='noopener noreferrer'>Tomorroworld</a>
    </Footer>
  </main>
)

export default LandingPage

const CustomSignupBlock = () => (
  <SignupBlock
    thankyouText='Thank you for signing up!'
    className='darker'
    leadService={config.leadService}
  />
)
