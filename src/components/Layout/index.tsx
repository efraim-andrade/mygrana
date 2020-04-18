import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Global, light, dark, ThemeContext } from '@/theme';

import { Container } from './styles';

const Layout: React.FC<{}> = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Global />

        <Container>
          <h1>Hello TypeScript!</h1>
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Layout;
