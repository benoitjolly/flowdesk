'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '../ui';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  height: 70px;
`;

const Logo = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const Navigation = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavItemWrapper = styled.div<{ $active: boolean }>`
  position: relative;
  
  a {
    color: ${({ $active, theme }) => $active ? theme.colors.primary : theme.colors.text};
    font-weight: ${({ $active, theme }) => $active ? theme.typography.fontWeights.medium : theme.typography.fontWeights.regular};
    text-decoration: none;
    padding: 0.5rem 0;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scaleX(${({ $active }) => $active ? 1 : 0});
    transition: transform ${({ theme }) => theme.transitions.normal};
  }
  
  &:hover:after {
    transform: scaleX(1);
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

interface NavItemProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
}

const NavItem = ({ href, active, children }: NavItemProps) => (
  <NavItemWrapper $active={active}>
    <Link href={href}>{children}</Link>
  </NavItemWrapper>
);

const Header = () => {
  const pathname = usePathname();
  
  return (
    <HeaderContainer>
      <Logo>Binance Market Data Viewer</Logo>
      <RightSection>
        <Navigation>
          <NavItem href="/" active={pathname === '/'}>
            Home
          </NavItem>
        </Navigation>
        <ThemeToggle />
      </RightSection>
    </HeaderContainer>
  );
};

export default Header; 