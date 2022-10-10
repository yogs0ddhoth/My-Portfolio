import React from 'react';

import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import createTheme from '@mui/material/styles/createTheme';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import background from "../assets/images/marek-piwnicki-ibc616VrRo4-unsplash.jpg";

import '../assets/css/style.css';

import Header from './Header';
import Footer from './Footer';
import defaultTheme from '../assets/theme';
import Container from '@mui/material/Container/Container';

const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function Layout({children}: {children: React.ReactNode}) {
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
  const matchDownSm = useMediaQuery(useTheme().breakpoints.down(640));
  const matchDownMd = useMediaQuery(useTheme().breakpoints.down(768))
  const matchUpLg = useMediaQuery(useTheme().breakpoints.up(1024));

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
            sx={{backgroundImage: `url(${background})` }}
          >
            <div 
              className='col-span-11 row-span-1' 
            />
            <div 
              className='
                col-span-1 row-span-1
                flex flex-row justify-center items-center
                '
            >
              <Header />
            </div>

            <main className='container m-auto
              col-span-12 row-span-10
              '
            >
              {children}
            </main>
            {/* <div className='
              col-span-12 row-span-1 md:col-span-1 md:row-span-10 
              '
            >
              <Footer matchDownMd={matchDownMd} />
            </div> */}

            {/* <div className='col-span-12 row-span-2'>
            {matchDownMd === false && (
              <Typography variant='caption' className=' text-stone-50'>
                image courtesy of <a className='underline hover:cursor-pointer' href='https://unsplash.com/@marekpiwnicki'>Marek Piwnicki</a>
              </Typography>
            )}
            </div> */}

          </Container>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </StyledEngineProvider>
  );
}