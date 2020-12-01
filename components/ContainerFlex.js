import React from 'react'

const ContainerFlex = (props) => (
  <section {...props}>
    {props.children}

    <style jsx>{`
      section {
        display: flex;
        flex-direction: ${props.direction || 'row'};
        justify-content: center;
        align-items: center;
        width: 100%;
      }

      @media only screen and (max-width: ${props.phoneBreakpoint || 480}px) {
        section {
          flex-direction: column;
        }
      }
    `}
    </style>
  </section>
)

export default ContainerFlex
