import React, { useState, useReducer, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
// import '../assets/css/style.css';

import ContactForm from '../components/Contact'

export const Contact = () => (
  <Card className='
      opacity-95 drop-shadow-icon
      col-span-10
      grid grid-cols-10 grid-rows-7 justify-center
    '
  >
      <Typography variant='h1' 
        className='col-span-10'
      >
        Contact Me
      </Typography>
    {/* <ContactForm /> */}
  </Card>
);