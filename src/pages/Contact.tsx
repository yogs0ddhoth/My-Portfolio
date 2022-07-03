import React, { useState, useReducer, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
// import '../assets/css/style.css';

import ContactForm from '../components/Contact'

export const Contact = () => (
  <Card className='
      opacity-95
      col-span-12 row-span-5
    '
  >
    <h2 className='title col-span-12 text-center'>
      Contact Me
    </h2>
    <ContactForm />
  </Card>
);