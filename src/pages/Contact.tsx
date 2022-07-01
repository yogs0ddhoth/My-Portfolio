import React, { useState, useReducer, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import '../assets/css/style.css';

import ContactForm from '../components/Contact'

export const Contact = () => (
  <Card className='col-span-12 row-span-5 opacity-95'>
    <h2 className='title col-12 col-md-9 text-center'>
      Contact Me
    </h2>
    <ContactForm />
  </Card>
);