import React from 'react'

import Block from './Block'
import SignupForm from './SignupForm'

const SignupBlock = (props) => {
  return (
    <Block className='signup-block' {...props}>
      <SignupForm {...props} />
    </Block>
  )
}

export default SignupBlock
