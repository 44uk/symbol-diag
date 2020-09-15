import Link from 'next/link'
import {
  HeaderContainer
} from '../styled'

export const Nav = () => (
  <HeaderContainer>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>{' '}
      |{' '}
      <Link href="/about">
        <a>About</a>
      </Link>{' '}
      |{' '}
      <Link href="/chain/height">
        <a>Chain Height</a>
      </Link>{' '}
      |{' '}
      <Link href="/fee/transaction">
        <a>Transaction Fee</a>
      </Link>{' '}
      <Link href="/fee/rental">
        <a>Rental Fee</a>
      </Link>{' '}
      <Link href="/network/properties">
        <a>Network Properties</a>
      </Link>{' '}
    </nav>
  </HeaderContainer>
)
