import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import createTheme from '@mui/material/styles/createTheme';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

import Typography from '@mui/material/Typography';

// import "@fontsource/roboto"
// import "@fontsource/kolker-brush"
// import "@fontsource/londrina-sketch"
// import "@fontsource/rock-3d"
// import "@fontsource/average-sans";

// import background from "./assets/images/marek-piwnicki-ibc616VrRo4-unsplash.jpg";

import './assets/css/style.css';

import Header from './layout/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Layout from './layout';

export default function App() {
  const matchDownSm = useMediaQuery(useTheme().breakpoints.down(640));
  const matchDownMd = useMediaQuery(useTheme().breakpoints.down(768));
  const matchUpLg = useMediaQuery(useTheme().breakpoints.up(1024));

  return (
    // <StyledEngineProvider injectFirst>
    //   <ColorModeContext.Provider value={colorMode}>
    //     <ThemeProvider theme={theme}>
    //       <div className='
    //         min-h-screen min-w-full bg-cover
    //         grid grid-cols-12 justify-end
    //         '
    //         style={
    //           { backgroundImage: `url(${background})` }
    //         }
    //       >
    //         <div className='col-span-11' />
    //         <div className='
    //           col-span-1
    //           flex flex-row justify-center items-center
    //           '
    //         >
    //           <Header />
    //         </div>

    //         {/* <div
    //           className='
    //           md:col-span-1'
    //         ></div> */}
    //         <div className='
    //           pl-3 pr-3 md:pr-0 pb-9
    //           col-span-12 md:col-span-11
    //           grid grid-cols-10 justify-start
    //           '
    //         >
    <Layout>
      <Routes>
        <Route path="/" element={<About />} />
        <Route
          path="/portfolio"
          element={
            <Portfolio matchDownMd={matchDownMd} matchUpLg={matchUpLg} />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume matchDownSm={matchDownSm} />} />
      </Routes>
    </Layout>
    //         </div>
    //         <div className='
    //           pt-8 md:pt-0
    //           col-span-12 row-span-5 md:col-span-1
    //           flex flex-col justify-start
    //           '
    //         >
    //           <Footer matchDownMd={matchDownMd} />
    //         </div>
    //         {
    //           matchDownMd === false ? (
    //             <Typography variant='caption'
    //               className='
    //                text-stone-50 drop-shadow-icon
    //                 col-span-12 pl-5 pt-3 pb-3
    //                 absolute bottom-0.5
    //               '
    //             >
    //               image courtesy of <a
    //                 className='underline hover:cursor-pointer' href='https://unsplash.com/@marekpiwnicki'
    //               >Marek Piwnicki</a>
    //             </Typography>
    //           ) : (
    //             <></>
    //           )
    //         }
    //       </div>
    //     </ThemeProvider>
    //   </ColorModeContext.Provider>
    // </StyledEngineProvider>
  );
}
