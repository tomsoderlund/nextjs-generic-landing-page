import React from 'react'
import Link from 'next/link'

const LinkOptional = (props) => {
  const { href, as, children, ...otherProps } = props
  return (
    href
      ? href.includes('http')
        ? (
          <a href={href} {...otherProps}>{children}</a>
        )
        : (
          <Link href={href} as={as}>
            <a {...otherProps}>{children}</a>
          </Link>
        )
      : (
        <>{children}</>
      )
  )
}

export default LinkOptional
