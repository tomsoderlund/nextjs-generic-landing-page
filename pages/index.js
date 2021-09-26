// External packages used:
//   yarn add react-share react-twitter-embed react-fb-like
import React from 'react'

import {
  PageHead,
  Block,
  ContainerFlex,
  Features,
  Footer,
  Headline,
  Image,
  Pricing,
  SignupBlock,
  SocialFollow,
  SocialSharing,
  Testimonials,
  Video
} from 'components'

import { config } from 'config/config'

const LandingPage = () => (
  <main>
    <PageHead />

    <Headline
      title={config.appName}
      description={config.appDescription}
    >
      <ContainerFlex>
        <span>Share:{' '}</span>
        <SocialSharing
          link={config.appUrl}
          title={config.appName}
          body={config.appTagline}
        />
      </ContainerFlex>
      <ContainerFlex align='flex-start' margin='1em 0 0'>
        <span>Follow:{' '}</span>
        <SocialFollow
          facebookLink='https://www.facebook.com/tomorroworldcom/'
          twitterName='tomsoderlund'
          instagramName='tomsoderlund'
        />
      </ContainerFlex>
    </Headline>

    <CustomSignupBlock />

    <Block padding='1em'>
      Get the source code from <a href='https://github.com/tomsoderlund/nextjs-generic-landing-page'>https://github.com/tomsoderlund/nextjs-generic-landing-page</a>
    </Block>

    <Features
      features={config.appFeatures}
      fullWidth={false}
    />

    <Image
      src='/features/feature1.jpg'
      fullWidth={false}
    />

    <Pricing
      products={config.appProducts}
    />

    <Video
      src='https://www.youtube.com/embed/UjtVVsz-mMg'
      controls={false}
      fullWidth={false}
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

const CustomSignupBlock = () => (
  <SignupBlock
    thankyouText='Thank you for signing up!'
    className='darker'
    leadService={config.leadService}
  />
)
