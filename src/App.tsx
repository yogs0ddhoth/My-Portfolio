import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import logo from './logo.svg';
// import './App.css';
import './assets/css/index.css';
import './assets/css/style.css';
import './assets/css/App.css';

import {Header} from './layout/Header';
import {About} from './pages/About';
import { Portfolio } from './pages/Portfolio';
import {Contact} from './pages/Contact';
import {Resume} from './pages/Resume';
import {Footer} from './layout/Footer';

export const App = () => (
  <ChakraProvider>
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
);
