import React from 'react'

import PageHead from '../components/PageHead'
// import Block from '../components/Block'

import Headline from '../components/Headline'
import Features from '../components/Features'
import Image from '../components/Image'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import SignupBlock from '../components/SignupBlock'
import Footer from '../components/Footer'

// import { config } from '../config/config'

const LandingPage = () => (
  <main>
    <PageHead />
    <Headline />
    <SignupBlock
      thankyouText='Thank you for signing up!'
      className='darker'
    />
    <Features />
    <Image src='/features/feature1.jpg' />
    <Pricing />
    <Testimonials />
    <SignupBlock
      thankyouText='Thank you for signing up!'
      className='darker'
    />
    <Footer children='&copy; Company, Inc.' />
  </main>
)

export default LandingPage
