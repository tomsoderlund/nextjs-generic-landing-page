import React from 'react'

import Block from './Block'
import SignupForm from './SignupForm'

export default (props) => {
  return (
    <Block className='signup-block' padding='1em' {...props}>
      <SignupForm {...props} />
    </Block>
  )
}
