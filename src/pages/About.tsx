import React from 'react';
// import { Heading, Text } from '@chakra-ui/react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
// import avatar from '../images/avatar.png';
// import '../assets/css/index.css';
import '../assets/css/style.css';

export default function About() {
  
  

  return (
    <Card className=' 
        opacity-95 drop-shadow-icon
        col-span-10
        grid grid-cols-10 grid-rows-7 justify-center
      '
    >
      <Typography variant='h1' 
        className='col-span-10'
      >
        About Me
      </Typography>
      {/* <img src={avatar} alt='Avatar' className='theme-1 col-3 col-2-md col-1-lg' style={imgStyle}/> */}
      {/* <Typography variant='body1'
        // className='col-12'
      >
        Composer, Full Stack Web Developer; 
        <br />
        Crafting quality and intuitively coded applications.
      </Typography> */}
    </Card>
  )
};