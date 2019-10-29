import React from 'react'

import PageHead from '../components/PageHead'
import Block from '../components/Block'

import Headline from '../components/sections/Headline'
import Features from '../components/sections/Features'
import Image from '../components/sections/Image'

// import { config } from '../config/config'

const LandingPage = () => (
  <main>
    <PageHead />
    <Headline />
    <Features />
    <Image src='/features/feature1.jpg' />
  </main>
)

export default LandingPage
