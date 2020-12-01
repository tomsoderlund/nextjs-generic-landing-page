import React from 'react'

import Block from './Block'

const Testimonials = (props) => (
  <Block {...props}>
    {props.headline && <h2>{props.headline}</h2>}
  </Block>
)

export default Testimonials
