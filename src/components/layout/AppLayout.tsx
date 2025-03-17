'use client';

import styled from 'styled-components';
import Header from './Header';
import Container from './Container';

const Main = styled.main`
  padding: ${({ theme }) => theme.spacing.lg} 0;
  min-height: calc(100vh - 70px);
`;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          {children}
        </Container>
      </Main>
    </>
  );
};

export default AppLayout; 