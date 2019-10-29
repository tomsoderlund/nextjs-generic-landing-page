import React from 'react'

export default ({ children, className, background, columns, padding = '0 1em' }) => (
  <div className={className ? `block ${className}` : 'block'}>
    {children}
    <style jsx>{`
      div {
        padding: ${padding};
        flex: 1;
        ${background ? `background-color: ${background};` : ''}
        ${columns ? `/* Flexbox: */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;` : ''}
      }

@media only screen and (max-width: 500px) {
  div {
    flex-direction: column;
  }
}
    `}
    </style>
  </div>
)
