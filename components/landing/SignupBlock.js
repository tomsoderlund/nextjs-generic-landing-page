import React from 'react'

import Block from './Block'
import SignupForm from './SignupForm'

const SignupBlock = (props) => {
  return (
    <Block className='signup-block' padding='1em' {...props}>
      <SignupForm {...props} />
    </Block>
  )
}

export default SignupBlock
