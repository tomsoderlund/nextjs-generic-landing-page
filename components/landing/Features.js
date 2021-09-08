import React from 'react'

import Block from './Block'
import LinkOptional from './LinkOptional'

/** [{ name, (description), (imageSrc) }] */
const Features = (props) => (
  <Block className='columns' padding='1em 0 2em' {...props}>
    {props.features.map((feature, featureIndex) => (
      <LinkOptional
        key={feature.name}
        href={feature.link}
        as={feature.as}
        target={feature.target}
        className='link-wrapper'
      >
        <Block className='feature rows' padding={(featureIndex === 0 || featureIndex === props.features.length - 1) ? '0' : '0 2em'}>
          <h3>{feature.name}</h3>
          {feature.imageSrc && <img src={feature.imageSrc} alt={feature.name} title={feature.name} />}
          {feature.description && <p className='description'>{feature.description}</p>}
        </Block>

        <style jsx>{`
          img {
            max-width: 100%;
            object-fit: contain;
          }

          @media only screen and (max-width: 500px) {
            :global(.feature.rows) {
              padding: 0;
            }
          }

          :global(.feature .description) {
            margin-top: 0.5em;
          }

          :global(.link-wrapper) {
            flex: 1;
            text-decoration: none;
            color: inherit;
          }
        `}
        </style>
      </LinkOptional>
    ))}
  </Block>
)

export default Features
