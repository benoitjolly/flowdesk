'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components';
import { getTheme } from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyles';
import { useTheme } from '../context/ThemeContext';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  const { themeMode } = useTheme();
  const theme = getTheme(themeMode);

  if (typeof window !== 'undefined') {
    return (
      <StyleSheetManager enableVendorPrefixes>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </StyleSheetManager>
    );
  }

  return (
    <StyleSheetManager 
      sheet={styledComponentsStyleSheet.instance}
      enableVendorPrefixes
    >
      <ThemeProvider theme={getTheme('dark')}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  );
} 