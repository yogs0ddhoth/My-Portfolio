import React from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import '../../assets/css/style.css';
import '../../assets/css/Header.css';

import hero from "../../assets/images/marek-piwnicki-ibc616VrRo4-unsplash.jpg";

import { Navbar } from './Navbar';

export const Header = () => (
  <div>
    <img src={hero} alt="cover photo" className="hero"></img>
    <header className='header theme-2 col-12 flex-row align-end pt-3'>
      <NavLink to='/' className='home col-12 col-md-6'>
        <h1 className='theme-2'>Ben Lin</h1>
      </NavLink>
      <Navbar />
    </header>
  </div>
);