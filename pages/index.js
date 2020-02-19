import React from 'react'

import {
  Block,
  Features,
  Footer,
  Headline,
  Image,
  PageHead,
  Pricing,
  SignupBlock,
  SocialSharing,
  Testimonials,
  Video
} from '../components'

import { config } from '../config/config'

const CustomSignupBlock = () => (
  <SignupBlock
    thankyouText='Thank you for signing up!'
    className='darker'
    leadService={config.leadService}
  />
)

const LandingPage = () => (
  <main>
    <PageHead />

    <Headline
      title={config.appName}
      description={config.appDescription}
    >
      <SocialSharing
        link={config.appUrl}
        title={config.appName}
        body={config.appTagline}
      />
    </Headline>

    <CustomSignupBlock />

    <Block padding='1em'>
      Get the source code from <a href='https://github.com/tomsoderlund/nextjs-generic-landing-page'>https://github.com/tomsoderlund/nextjs-generic-landing-page</a>
    </Block>

    <Features features={config.appFeatures} />

    <Image src='/features/feature1.jpg' />

    <Pricing />

    <Video
      src='https://www.youtube.com/embed/UjtVVsz-mMg'
      controls={false}
    />

    <Testimonials
      headline='What our customers are saying'
    />

    <CustomSignupBlock />

    <Footer>
      &copy; Company, Inc.
    </Footer>
  </main>
)

export default LandingPage
