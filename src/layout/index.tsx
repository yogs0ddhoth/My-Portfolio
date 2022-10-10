import React from 'react';

import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import createTheme from '@mui/material/styles/createTheme';

import background from '../assets/images/marek-piwnicki-ibc616VrRo4-unsplash.jpg';

import Header from './Header';
import defaultTheme from '../assets/theme';
import Container from '@mui/material/Container/Container';

const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');

  // infrastructure to implement light mode
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((mode) => (mode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        ...defaultTheme,
        palette: {
          ...defaultTheme.palette,
          mode,
        },
      }),
    [mode]
  );

  return (
    <StyledEngineProvider injectFirst>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Container
            maxWidth={false}
            className="
              h-[100vh] min-w-[100vw] overflow-x-hidden bg-cover
              grid grid-cols-12 grid-rows-12
            "
            sx={{ backgroundImage: `url(${background})` }}
          >
            <div className="col-span-11 row-span-1" />
            <div
              className="
                col-span-1 row-span-1
                flex flex-row justify-center items-center
                "
            >
              <Header />
            </div>

            <main
              className="container m-auto
              col-span-12 h-full
              "
            >
              {children}
            </main>
          </Container>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </StyledEngineProvider>
  );
}
