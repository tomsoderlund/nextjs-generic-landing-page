import React from 'react'

import Block from './Block'

export default (props) => (
  <Block {...props}>
    {props.headline && <h2>{props.headline}</h2>}
  </Block>
)
