import React from 'react'

import PageHead from '../components/PageHead'
// import Block from '../components/Block'

import Headline from '../components/Headline'
import Features from '../components/Features'
import Image from '../components/Image'
import Video from '../components/Video'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import SignupBlock from '../components/SignupBlock'
import Footer from '../components/Footer'
import SocialSharing from '../components/SocialSharing'

import { config } from '../config/config'

const LandingPage = () => (
  <main>
    <PageHead />
    <Headline
      title={config.appName}
      description={config.appDescription}
    >
      <SocialSharing
        link='https://nextjs-generic-landing-page.now.sh/'
        title={config.appName}
        body={config.appTagline}
      />
    </Headline>
    <SignupBlock
      thankyouText='Thank you for signing up!'
      className='darker'
      leadService={config.leadService}
    />
    <Features features={config.appFeatures} />
    <Image src='/features/feature1.jpg' />
    <Pricing />
    <Video
      src='https://www.youtube.com/embed/UjtVVsz-mMg'
      controls={false}
    />
    <Testimonials />
    <SignupBlock
      thankyouText='Thank you for signing up!'
      className='darker'
      leadService={config.leadService}
    />
    <Footer children='&copy; Company, Inc.' />
  </main>
)

export default LandingPage
