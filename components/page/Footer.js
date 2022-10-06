import React from 'react'

const Footer = ({ children }) => (
  <footer
    className='color-footer-bg color-footer-fg'
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
