"use client"
import Link from 'next/link'
import styled from 'styled-components'

// This creates a custom component that wraps an <a> tag
const RedLink = styled.a`
  color: red;
`

function PruebaEnlace({ href, name }) {
  return (
    <>
    <Link href="/" passHref legacyBehavior>
      <RedLink>BUENAAAAS</RedLink>
    </Link>
    </>
  )
}

export default PruebaEnlace