import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
// import { MenuIcon } from '@chakra-ui/react';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import '../../assets/css/style.css';
import '../../assets/css/Header.css';

import { Navbar } from './Navbar';

export default function Header(props: {matchDownSm: boolean, matchUpLg: boolean}) {

  return (
    <div>2
      <header 
        // className='header theme-2 col-12 flex-row align-end pt-3' 
        className='relative grid-cols-12 flex flex-row justify-end pt-3 bottom-6'
      >
        {/* <NavLink to='/' className='home'>
          <Heading as='h1' fontSize={'8xl'} 
            className='theme-2 text-6xl text-stone-50 sm:text-center md:text-start md:w-a'
            textShadow='0 5px 5px rgb(0 0 0 / 0.85)'
          >Ben Lin</Heading>
        </NavLink> */}

        {/* <div className='justify-end'> */}
          <IconButton
            // size="large"
            // edge="start"
            // color="inherit"
            aria-label="menu"
            // sx={{ mr: 2 }}
            className='text-6xl justify-self-end'
          >
            <MenuIcon 
              // color='primary'
              className='text-stone-50'
              fontSize={'inherit'}
            />
          </IconButton>
        {/* </div> */}


        <Navbar />
      </header>
    </div>
  )
};