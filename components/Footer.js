import React from 'react'

export default ({ children }) => (
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
