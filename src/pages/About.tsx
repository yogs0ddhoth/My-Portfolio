import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import Paper from '@mui/material/Paper';
// import avatar from '../images/avatar.png';
// import '../assets/css/index.css';
import '../assets/css/style.css';

export default function About() {
  const imgStyle = { borderRadius: '50%' };

  return (
    <div 
      // className='col-12 flex-row'
    >
      <Heading as='h1' 
      // className='title col-12 align-start'
      >
        About Me
      </Heading>
      {/* <img src={avatar} alt='Avatar' className='theme-1 col-3 col-2-md col-1-lg' style={imgStyle}/> */}
      <Text 
        // className='col-12'
      >
        Composer, Full Stack Web Developer; 
        <br />
        Crafting quality and intuitively coded applications.
      </Text>
    </div>
  )
};