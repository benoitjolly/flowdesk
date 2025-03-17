import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      // Base colors
      dark: string;
      light: string;
      
      // Primary colors
      primary: string;
      primaryA10: string;
      primaryA20: string;
      primaryA30: string;
      primaryA40: string;
      primaryA50: string;
      
      // Surface colors
      surface: string;
      surfaceA10: string;
      surfaceA20: string;
      surfaceA30: string;
      surfaceA40: string;
      surfaceA50: string;
      
      // Tonal surface colors
      surfaceTonal: string;
      surfaceTonaA10: string;
      surfaceTonaA20: string;
      surfaceTonaA30: string;
      surfaceTonaA40: string;
      surfaceTonaA50: string;
      
      // Functional colors
      background: string;
      text: string;
      textLight: string;
      error: string;
      success: string;
      warning: string;
      info: string;
      border: string;
    };
    typography: {
      fontFamily: string;
      fontSizes: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
      };
      fontWeights: {
        light: number;
        regular: number;
        medium: number;
        bold: number;
      };
      lineHeights: {
        body: number;
        heading: number;
      };
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
      round: string;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
    transitions: {
      fast: string;
      normal: string;
      slow: string;
    };
    zIndices: {
      base: number;
      dropdown: number;
      sticky: number;
      fixed: number;
      modal: number;
      popover: number;
      tooltip: number;
    };
  }
}

// Thème sombre
const darkTheme: DefaultTheme = {
  colors: {
    // Base colors
    dark: '#000000',
    light: '#ffffff',
    
    // Primary colors
    primary: '#7884d5',
    primaryA10: '#7884d5',
    primaryA20: '#7884d5',
    primaryA30: '#7884d5',
    primaryA40: '#9097dc',
    primaryA50: '#a7abe3',
    
    // Surface colors
    surface: '#121212',
    surfaceA10: '#282828',
    surfaceA20: '#3f3f3f',
    surfaceA30: '#575757',
    surfaceA40: '#717171',
    surfaceA50: '#8b8b8b',
    
    // Tonal surface colors
    surfaceTonal: '#202951',
    surfaceTonaA10: '#383d63',
    surfaceTonaA20: '#4f5275',
    surfaceTonaA30: '#666988',
    surfaceTonaA40: '#7e809b',
    surfaceTonaA50: '#9798ae',
    
    // Functional colors
    background: '#121212',
    text: '#ffffff',
    textLight: '#8b8b8b',
    error: '#e74c3c',
    success: '#27ae60',
    warning: '#f39c12',
    info: '#094ebe',
    border: '#3f3f3f',
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontSizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      md: '1rem',       // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      xxl: '1.5rem',    // 24px
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.2,
    },
  },
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    xxl: '3rem',      // 48px
  },
  breakpoints: {
    xs: '0px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px',
  },
  borderRadius: {
    small: '0.25rem',   // 4px
    medium: '0.5rem',   // 8px
    large: '1rem',      // 16px
    round: '50%',
  },
  shadows: {
    small: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    medium: '0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
    large: '0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10)',
  },
  transitions: {
    fast: '0.1s ease-in-out',
    normal: '0.2s ease-in-out',
    slow: '0.3s ease-in-out',
  },
  zIndices: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modal: 1300,
    popover: 1400,
    tooltip: 1500,
  },
};

// Thème clair
const lightTheme: DefaultTheme = {
  colors: {
    // Base colors
    dark: '#000000',
    light: '#ffffff',
    
    // Primary colors
    primary: '#a7abe3',
    primaryA10: '#a7abe3',
    primaryA20: '#7884d5',
    primaryA30: '#7884d5',
    primaryA40: '#9097dc',
    primaryA50: '#a7abe3',
    
    // Surface colors
    surface: '#ffffff',
    surfaceA10: '#f5f5f5',
    surfaceA20: '#eeeeee',
    surfaceA30: '#e0e0e0',
    surfaceA40: '#bdbdbd',
    surfaceA50: '#9e9e9e',
    
    // Tonal surface colors
    surfaceTonal: '#e3e8f7',
    surfaceTonaA10: '#d1d8f0',
    surfaceTonaA20: '#bfc8e9',
    surfaceTonaA30: '#adb8e2',
    surfaceTonaA40: '#9ba8db',
    surfaceTonaA50: '#8998d4',
    
    // Functional colors
    background: '#ffffff',
    text: '#121212',
    textLight: '#666666',
    error: '#d32f2f',
    success: '#2e7d32',
    warning: '#ed6c02',
    info: '#0288d1',
    border: '#e0e0e0',
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontSizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      md: '1rem',       // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      xxl: '1.5rem',    // 24px
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.2,
    },
  },
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    xxl: '3rem',      // 48px
  },
  breakpoints: {
    xs: '0px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px',
  },
  borderRadius: {
    small: '0.25rem',   // 4px
    medium: '0.5rem',   // 8px
    large: '1rem',      // 16px
    round: '50%',
  },
  shadows: {
    small: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    medium: '0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
    large: '0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10)',
  },
  transitions: {
    fast: '0.1s ease-in-out',
    normal: '0.2s ease-in-out',
    slow: '0.3s ease-in-out',
  },
  zIndices: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modal: 1300,
    popover: 1400,
    tooltip: 1500,
  },
};

// Fonction pour obtenir le thème en fonction du mode
export const getTheme = (mode: 'light' | 'dark'): DefaultTheme => {
  return mode === 'dark' ? darkTheme : lightTheme;
};

// Exporter le thème sombre par défaut
export const theme = darkTheme;

export default theme; 