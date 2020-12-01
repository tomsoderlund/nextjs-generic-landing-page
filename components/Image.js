import React from 'react'

import Block from './Block'

/** { src, title } */
const Image = (props) => {
  const imageName = props.src.split('/').pop().split('.').shift()
  return (
    <Block padding='0' {...props}>
      <img src={props.src} alt={props.title || imageName} title={props.title} />
      <style jsx>{`
        img {
          width: 100%;
          object-fit: cover;
        }
      `}
      </style>
    </Block>
  )
}

export default Image
