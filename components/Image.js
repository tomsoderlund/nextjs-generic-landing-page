import React from 'react'

import Block from './Block'

export default (props) => {
  const imageName = props.src.split('/').pop().split('.').shift()
  return (
    <Block padding='0' {...props}>
      <img src={props.src} alt={imageName} title={props.title} />
      <style jsx>{`
        img {
          max-width: 100%;
          object-fit: contain;
        }
      `}
      </style>
    </Block>
  )
}
