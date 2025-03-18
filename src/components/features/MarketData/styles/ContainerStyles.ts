import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.surfaceA10};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding-top: 0;
`;

export const PageContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PageHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const StickyHeader = styled.div.attrs({ className: 'sticky-header' })`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  padding: 1rem 1rem 0 1rem;
  background-color: ${({ theme }) => theme.colors.surfaceA10};
  border-radius: ${({ theme }) => theme.borderRadius.large} ${({ theme }) => theme.borderRadius.large} 0 0;

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

export const ContentContainer = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`; 