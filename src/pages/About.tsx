import React from 'react';
// import { Heading, Text } from '@chakra-ui/react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// import avatar from '../images/avatar.png';
// import '../assets/css/index.css';
import '../assets/css/style.css';

export default function About() {
  
  

  return (
    <div 
      // className='col-12 flex-row'
    >
      <Typography variant='h1' 
      // className='title col-12 align-start'
      >
        About Me
      </Typography>
      {/* <img src={avatar} alt='Avatar' className='theme-1 col-3 col-2-md col-1-lg' style={imgStyle}/> */}
      <Typography variant='body1'
        // className='col-12'
      >
        Composer, Full Stack Web Developer; 
        <br />
        Crafting quality and intuitively coded applications.
      </Typography>
    </div>
  )
};