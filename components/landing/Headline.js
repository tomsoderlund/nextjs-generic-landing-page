import React from 'react'

import Block from './Block'

/** { title, description } */
const Headline = (props) => (
  <Block
    padding='2em 1em'
    className='headline color-header-bg color-header-fg'
    {...props}
  >
    {props.title && <h1>{props.title}</h1>}
    {props.description && <h2>{props.description}</h2>}
    {props.children && <>{props.children}</>}
  </Block>
)

export default Headline
