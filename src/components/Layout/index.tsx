import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Global, light, dark, ThemeContext } from '@/theme';

import Aside from '../Aside';
import { Container } from './styles';

const Layout: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Global />

        <Container>
          <main>{children}</main>

          <aside>
            <Aside />
          </aside>
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Layout;
