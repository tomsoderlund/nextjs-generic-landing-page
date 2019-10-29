import React from 'react'

import Block from './Block'
import { config } from '../config/config'

export default (props) => (
  <Block padding='0 0 1em' columns {...props}>
    {config.appFeatures.map(feature => (
      <Block key={feature.name}>
        <h3>{feature.name}</h3>
        <img src={feature.image} alt={feature.name} title={feature.description} />
        <p className='description'>
          {feature.description}
        </p>
        <style jsx>{`
          img {
            max-width: 100%;
            object-fit: contain;
          }
        `}
        </style>
      </Block>
    ))}
  </Block>
)
