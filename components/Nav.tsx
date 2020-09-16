import Link from 'next/link'
import {
  HeaderContainer,
  NavContainer,
  NavItemList,
  NavItem,
} from '../styled'

export const Nav = () => (
  <HeaderContainer>
    <NavItemList>
      <NavItem>
        <Link href="/">
          <a>Home</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/chain/height">
          <a>Chain Height</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/fee/transaction">
          <a>Transaction Fee</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/fee/rental">
          <a>Rental Fee</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/network/properties">
          <a>Network Properties</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/about">
          <a>About</a>
        </Link>
      </NavItem>
    </NavItemList>
  </HeaderContainer>
)
