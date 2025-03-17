'use client';

import styled, { css } from 'styled-components';

type ContainerSize = 'small' | 'medium' | 'large' | 'full';

interface ContainerProps {
  size?: ContainerSize;
  padding?: boolean;
  center?: boolean;
  children: React.ReactNode;
}

const StyledContainer = styled.div<{
  $size?: ContainerSize;
  $padding?: boolean;
  $center?: boolean;
}>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  
  ${({ $padding }) => $padding && css`
    padding-left: ${({ theme }) => theme.spacing.md};
    padding-right: ${({ theme }) => theme.spacing.md};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding-left: ${({ theme }) => theme.spacing.lg};
      padding-right: ${({ theme }) => theme.spacing.lg};
    }
  `}
  
  ${({ $center }) => $center && css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
  
  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return css`
          max-width: 640px;
        `;
      case 'medium':
        return css`
          max-width: 1024px;
        `;
      case 'large':
        return css`
          max-width: 1280px;
        `;
      case 'full':
      default:
        return css`
          max-width: 100%;
        `;
    }
  }}
`;

const Container = ({
  size = 'medium',
  padding = true,
  center = false,
  children,
  ...props
}: ContainerProps) => {
  return (
    <StyledContainer
      $size={size}
      $padding={padding}
      $center={center}
      {...props}
    >
      {children}
    </StyledContainer>
  );
};

export default Container; 