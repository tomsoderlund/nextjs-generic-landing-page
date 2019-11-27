import React from 'react'

import Block from './Block'

/** [{ name, (description), (imageSrc) }] */
export default (props) => (
  <Block className='columns' padding='1em 0 2em' {...props}>
    {props.features.map(feature => (
      <Block key={feature.name} className='feature rows'>
        <h3>{feature.name}</h3>
        {feature.imageSrc && <img src={feature.imageSrc} alt={feature.name} title={feature.name} />}
        {feature.description && <p className='description'>{feature.description}</p>}
        <style jsx>{`
          img {
            max-width: 100%;
            object-fit: contain;
          }

          :global(.feature .description) {
            margin-top: 0.5em;
          }
        `}
        </style>
      </Block>
    ))}
  </Block>
)
