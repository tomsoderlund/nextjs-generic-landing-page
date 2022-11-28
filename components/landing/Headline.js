import React from 'react'

import Block from './Block'

/** { title, description } */
const Headline = (props) => (
  <Block
    padding='2em 1em'
    className='headline color-headline-bg color-headline-fg'
    {...props}
  >
    {props.title && <h1>{props.title}</h1>}
    {props.description && <h2 className='description'>{props.description}</h2>}
    {props.children && <>{props.children}</>}
  </Block>
)

export default Headline
