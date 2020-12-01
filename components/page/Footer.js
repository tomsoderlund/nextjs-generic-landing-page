import React from 'react'

const Footer = ({ children }) => (
  <footer
    className='color-header-bg color-background-fg'
  >
    {children}
    <style jsx>{`
      footer {
        font-size: 0.7em;
        padding: 1em;
      }
    `}
    </style>
  </footer>
)

export default Footer
