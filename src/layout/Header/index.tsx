import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import { MenuIcon } from '@chakra-ui/react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import '../../assets/css/style.css';
import '../../assets/css/Header.css';

import hero from "../../assets/images/marek-piwnicki-ibc616VrRo4-unsplash.jpg";

import { Navbar } from './Navbar';

export const Header = () => (
  <div>
    <img src={hero} alt="cover photo" className="hero"></img>
    <header 
      className='header theme-2 col-12 flex-row align-end pt-3'
    >
      <NavLink to='/' className='home col-12 col-md-6'>
        <Heading as='h1' fontSize={'8xl'} className='theme-2'>Ben Lin</Heading>
      </NavLink>
      <Navbar />
    </header>
  </div>

);