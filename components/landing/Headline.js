import React from 'react'

import Block from './Block'

/** { title, description } */
const Headline = (props) => (
  <Block
    padding='1em'
    className='headline color-header-bg color-background-fg'
    {...props}
  >
    {props.title && <h1>{props.title}</h1>}
    {props.description && <h2>{props.description}</h2>}
    {props.children && <>{props.children}</>}
  </Block>
)

export default Headline
