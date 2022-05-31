import React from 'react';
import ReactDOM from 'react-dom/client';

import { HashRouter as Router } from 'react-router-dom';

import './assets/css/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);