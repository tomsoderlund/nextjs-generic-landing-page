import React from 'react'

import Block from './Block'

const Pricing = ({ products, onSelect, title = 'Pricing', inProgress, ...otherProps }) => {
  return (
    <Block padding='1em' {...otherProps}>
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            {products.map((product, pIndex) => (
              <th key={pIndex}>{product.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {products.map((product, pIndex) => (
              <td key={pIndex}>
                <ul>
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
        </tbody>
        <tfoot>
          <tr>
            {products.map((product, pIndex) => {
              const { label, ...actionProps } = product.action
              return (
                <td key={pIndex}>
                  <a
                    {...actionProps}
                    onClick={e => onSelect && onSelect(product.reference)}
                    className={'button primary progress-animation ' + (product.action.className || '') + (inProgress ? ' in-progress' : '')}
                  >
                    {label}
                  </a>
                </td>
              )
            })}
          </tr>
        </tfoot>
      </table>

      <style jsx>{`
        table {
          table-layout: fixed;
          margin: auto;
          width: 100%;
          max-width: 60em;
        }

        td {
          vertical-align: top;
        }

        .button {
          min-width: 10em;
        }
      `}
      </style>
    </Block>
  )
}

export default Pricing
