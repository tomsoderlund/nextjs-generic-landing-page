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
    <SignupForm className='darker' />
    <Features />
    <Image src='//picsum.photos/id/1011/1280/720' />
    <Pricing />
    <Testimonials />
    <Footer />
  </main>
)

export default LandingPage
