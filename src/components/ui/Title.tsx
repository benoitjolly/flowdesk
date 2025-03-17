'use client';

import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  align?: 'left' | 'center' | 'right';
  margin?: boolean;
}

const StyledTitle = styled.h1<{ $align?: string; $margin?: boolean }>`
  color: ${({ theme }) => theme.colors.text};
  text-align: ${({ $align }) => $align || 'left'};
  margin-bottom: ${({ $margin, theme }) => $margin ? theme.spacing.lg : '0'};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  line-height: ${({ theme }) => theme.typography.lineHeights.heading};
`;

const Title = ({
  children,
  level = 1,
  align = 'left',
  margin = true,
  ...props
}: TitleProps) => {
  return (
    <StyledTitle
      as={`h${level}` as React.ElementType}
      $align={align}
      $margin={margin}
      {...props}
    >
      {children}
    </StyledTitle>
  );
};

export default Title; 