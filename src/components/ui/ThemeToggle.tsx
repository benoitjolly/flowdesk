'use client';

import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: background-color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceA10};
  }
`;

const ThemeToggle: React.FC = () => {
  const { themeMode, toggleTheme } = useTheme();
  
  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      {themeMode === 'dark' ? '☀️' : '🌙'}
    </ToggleButton>
  );
};

export default ThemeToggle;