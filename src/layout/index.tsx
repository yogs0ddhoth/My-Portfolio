import React from 'react';

import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import createTheme from '@mui/material/styles/createTheme';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

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
  const matchDownMd = useMediaQuery(useTheme().breakpoints.down(768));

  return (
    <StyledEngineProvider injectFirst>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Container
            maxWidth={false}
            className="
              h-[100vh] min-w-[100vw] overflow-x-hidden bg-cover
              p-0 
              grid grid-cols-12 grid-rows-12 justify-end
            "
            sx={{backgroundImage: `url(${background})` }}
          >
          {/* <div className='
            min-h-screen min-w-full bg-cover 
            grid grid-cols-12 justify-end
            ' 
            // style={
            //   { backgroundImage: `url(${background})` }
            // }
          > */}
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

            {/* <div
              className='
              md:col-span-1'
            ></div> */}
            <main className='container m-auto
              col-span-12 row-span-10 md:col-span-11
              '
              // className='
                // pl-3 pr-3 md:pr-0 pb-9
                // col-span-12 md:col-span-11 row-span-10
                // grid grid-cols-10 justify-start
                // '
            >
              {children}
            </main>
            <div className='
              col-span-12 row-span-1 md:col-span-1 md:row-span-10 
              '
              // className='
                // pt-8 md:pt-0
                // col-span-12 row-span-1 md:col-span-1 md:row-span-10 
                // flex flex-col justify-start
                // '
            >
              <Footer matchDownMd={matchDownMd} />
            </div>
            <div>
            {
              matchDownMd === false ? (
                <Typography variant='caption'
                  className=' text-stone-50 col-span-12'
                  // className='
                  //  text-stone-50 drop-shadow-icon
                  //   col-span-12 row pl-5 pt-3 pb-3
                  // '
                >
                  image courtesy of <a 
                    className='underline hover:cursor-pointer' href='https://unsplash.com/@marekpiwnicki'
                  >Marek Piwnicki</a>
                </Typography>
              ) : (
                <></>
              )
            }
            </div>
          {/* </div>  */}
          </Container>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </StyledEngineProvider>
  );
}