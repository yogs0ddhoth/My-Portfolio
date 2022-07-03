import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import benLinResume from '../assets/resume/Ben-Lin-Resume.pdf';
// import '../assets/css/index.css';
import '../assets/css/style.css';

export const Resume = () => (
  <Card className='
      opacity-95 drop-shadow-icon
      col-span-10
      grid grid-cols-10 grid-rows-7 justify-center
    '
  >
    {/* <Typography variant='h1' 
      className='col-span-12'
    >
      My Resume:<a href={'../assets/resume/Ben-Lin-Resume.pdf'} download={Resume} className=''>
      download
      </a>
    </Typography> */}
    <Typography variant='h1' 
      className='col-span-10'
    >
      My Skills:
    </Typography>
    <a href={benLinResume} className='col-span-3' download={benLinResume}>
      <Button variant="outlined" className='col-span-3'>
        Download
      </Button>
    </a>

    <div className='col-span-12 row-span-4 flex-row align-start'>
      <Typography variant='h3' className='col-12'>
        Proficiencies:
      </Typography>
      {/* <ul className='col-12 '>
        <li>HTML</li>
        <li>CSS</li>
        <li>ES6+</li>
        <li>SQL</li>
        <li>Object Oriented Programing</li>
        <li>Document Oriented Databases</li>
        <li>GraphSQL</li>
        <li>JS Libraries</li>
        <li>React/JSX</li>
        <li>MERN Stack</li>
      </ul> */}
    </div>
  </Card>
);