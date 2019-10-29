import React from 'react'

import Block from './Block'

import { config } from '../config/config'

export default (props) => (
  <Block {...props}>
    <h1>{config.appName}</h1>
    <summary>{config.appDescription}</summary>
  </Block>
)
