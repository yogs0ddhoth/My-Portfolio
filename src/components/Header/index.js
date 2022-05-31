import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/css/style.css';
import '../../assets/css/Header.css';

import hero from "../../assets/images/marek-piwnicki-ibc616VrRo4-unsplash.jpg";

import Navigation from './Navigation';

export default function Header(props) {
  return (
    <div>
      <img src={hero} alt="cover photo" class="hero"></img>
      <header className='header theme-2 col-12 flex-row align-end pt-3'>
        <NavLink to='/' className='home col-12 col-md-6'>
          <h1 className='theme-2'>Ben Lin</h1>
        </NavLink>
        <Navigation />
      </header>
    </div>
  )
};