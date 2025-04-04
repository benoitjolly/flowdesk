import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: ${({ theme }) => theme.typography.lineHeights.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
    line-height: ${({ theme }) => theme.typography.lineHeights.heading};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    transition: color 0.3s ease;
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSizes.xxl};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSizes.xl};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    transition: color 0.3s ease;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.primaryA30};
    }
  }

  button, input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    outline: none;
    border: none;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    list-style-position: inside;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    transition: color 0.3s ease;
  }
  
  /* Transition pour les éléments qui utilisent des couleurs du thème */
  header, footer, main, section, div, nav, aside {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }
`;

export default GlobalStyles; 