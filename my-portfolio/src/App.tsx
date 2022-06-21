import React from 'react';
import { Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
// import './App.css';
import './assets/css/index.css';
import './assets/css/style.css';
import './assets/css/App.css';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App theme-1">
      <div className='contentWrap'>
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default App;
