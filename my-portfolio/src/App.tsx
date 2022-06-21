import React from 'react';
import { Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
// import './App.css';
import './assets/css/index.css';
import './assets/css/style.css';
import './assets/css/App.css';

import Header from './components/Header';
import About from './pages/About';
import Resume from './pages/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App theme-1">
      <div className='contentWrap'>
        <Header />

        <Routes>
          <Route path='/' element={<About />} />

          <Route path='/resume' element={<Resume />} />
        </Routes>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
