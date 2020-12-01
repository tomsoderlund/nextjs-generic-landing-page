import React from 'react'

const ContainerFlex = (props) => (
  <section {...props}>
    {props.children}

    <style jsx>{`
      section {
        display: flex;
        flex-direction: ${props.direction || 'row'};
        justify-content: ${props.justify || 'center'};
        align-items: ${props.align || 'center'};
        width: 100%;
        margin: ${props.margin || '0'};
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
