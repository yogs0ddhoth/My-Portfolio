import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from '@mui/material/styles';
import logo from './logo.svg';
// import './App.css';

import "@fontsource/londrina-sketch"
import "@fontsource/average-sans";
import { chakraTheme, muiTheme } from './utils/theme';

import './assets/css/index.css';
import './assets/css/style.css';
import './assets/css/App.css';

import {Header} from './layout/Header';
import About from './pages/About';
import { Portfolio } from './pages/Portfolio';
import {Contact} from './pages/Contact';
import {Resume} from './pages/Resume';
import {Footer} from './layout/Footer';

export const App = () => (
  <ThemeProvider theme={muiTheme}>
    <ChakraProvider theme={chakraTheme}>
    
      <div className="App theme-1">
        <div className='contentWrap'>
          <Header />
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>

        </div>
        <Footer />
      </div>
    
    </ChakraProvider>
  </ThemeProvider>
);
