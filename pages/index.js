import React from 'react'

import PageHead from '../components/PageHead'
import Block from '../components/Block'

import Headline from '../components/Headline'
import Features from '../components/Features'
import Image from '../components/Image'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import SignupForm from '../components/SignupForm'
import Footer from '../components/Footer'

// import { config } from '../config/config'

const LandingPage = () => (
  <main>
    <PageHead />
    <Headline />
    <SignupForm
      thankyouText='Thank you for signing up!'
      className='darker'
    />
    <Features />
    <Image src='/features/feature1.jpg' />
    <Pricing />
    <Testimonials />
    <Footer />
  </main>
)

export default LandingPage
