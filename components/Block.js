import React from 'react'

export default ({ children, className, background, padding = '0 1em' }) => (
  <div className={`block ${className || ''}`}>
    {children}
    <style jsx>{`
      div {
        padding: ${padding};
        flex: 1;
        ${background ? `background-color: ${background};` : ''}
      }

      div.columns {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
      }

      div.rows {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      }

      @media only screen and (max-width: 500px) {
        div.columns {
          flex-direction: column;
        }
      }
    `}
    </style>
  </div>
)
