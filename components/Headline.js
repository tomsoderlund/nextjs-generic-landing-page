import React from 'react'

import Block from './Block'

export default (props) => (
  <Block {...props}>
    <h1>{props.title}</h1>
    <summary>{props.description}</summary>
  </Block>
)
