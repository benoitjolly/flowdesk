import { createTheme, Theme } from '@mui/material/styles';
import { ThemeMode } from '@/context/ThemeContext';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const getMuiTheme = (mode: ThemeMode): Theme => {
  return mode === 'dark' ? darkTheme : lightTheme;
};

export const muiTheme = darkTheme;
