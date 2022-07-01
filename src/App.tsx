import React from 'react';
import { Routes, Route } from 'react-router-dom';

import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

import logo from './logo.svg';
// import './App.css';

import "@fontsource/roboto"
import "@fontsource/kolker-brush"
import "@fontsource/londrina-sketch"
import "@fontsource/rock-3d"
import "@fontsource/average-sans";

import background from "./assets/images/marek-piwnicki-ibc616VrRo4-unsplash.jpg";

// import './assets/css/index.css';
import './assets/css/style.css';
// import './assets/css/App.css';

import Header from './layout/Header';
import About from './pages/About';
import { Portfolio } from './pages/Portfolio';
import {Contact} from './pages/Contact';
import {Resume} from './pages/Resume';
import Footer from './layout/Footer';

export default function App() {
  const theme = useTheme();
  const matchDownSm = useMediaQuery(theme.breakpoints.down(640));
  const matchDownMd = useMediaQuery(theme.breakpoints.down(768))
  const matchUpLg = useMediaQuery(theme.breakpoints.up(1024));

  return (
    <div 
      className='grid grid-cols-12 min-h-screen relative min-w-full bg-cover' 
      style={
        { backgroundImage: `url(${background})` }
      }
    >
      <div className='col-span-12'>
        <Header matchDownSm={matchDownSm} matchUpLg={matchUpLg} />
      </div>
        <div className='col-span-12 md:col-span-11'>
          <Routes>
            <Route path='/' 
              element={<About />} 
            />
            <Route path='/portfolio' 
              element={
                <Portfolio 
                  matchDownMd={matchDownMd}
                  matchUpLg={matchUpLg} 
                />
              } 
            />
            <Route path='/contact' 
              element={<Contact />} 
            />
            <Route path='/resume' 
              element={<Resume />} 
            />
          </Routes>
        </div>
        <div className='col-span-12 md:col-span-1'>
          <Footer matchDownMd={matchDownMd} />
        </div>
    </div> 
    
  );
  
}