import React from 'react';

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

import '../../assets/css/style.css';
import '../../assets/css/Footer.css';

export const Footer = (props: {matchDownSm: boolean, matchUpLg: boolean}) => (
  <div className='footer theme-2 col-12 pt-3'>
    
    {/* <ul className='col-12 flex-row'>
      <li className="icon email col-2 col-1-sm row justify-center">
        <a href="mailto:blin7.webdev@gmail.com" className='col-12 row'>
          <FontAwesomeIcon className="theme-2 align-start fa-2x" icon={solid('envelope')} />
        </a>
      </li>
      <li className="icon col-2 col-1-sm row justify-center">
        <a href="https://github.com/yogs0ddhoth" className='col-12 row'>
          <FontAwesomeIcon className="theme-2 align-start fa-2x" icon={faGithub} />
        </a>
      </li>
      <li className="icon col-2 col-1-sm row justify-center">
        <a href="https://stackoverflow.com/users/17608484/blin" className='col-12 row'>
          <FontAwesomeIcon className="theme-2 align-start fa-2x" icon={faStackOverflow} />
        </a>
      </li>
      <li className="icon col-2 col-1-sm row justify-center">
        <a href="https://www.linkedin.com/in/ben-lin-b70a79227/" className='col-12 row'>
          <FontAwesomeIcon className="theme-2 align-start fa-2x" icon={faLinkedin} />
        </a>
      </li>
    </ul> */}

    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <IconButton
        // onClick={}
      >
        <FontAwesomeIcon className="theme-2 fa-2x drop-shadow-icon" icon={solid('envelope')} />
      </IconButton>
      <IconButton>
        <FontAwesomeIcon className="theme-2 fa-2x drop-shadow-icon" icon={faGithub} />
      </IconButton>
      <IconButton>
        <FontAwesomeIcon className="theme-2 fa-2x drop-shadow-icon" icon={faStackOverflow} />
      </IconButton>
      <IconButton>
        <FontAwesomeIcon className="theme-2 fa-2x drop-shadow-icon" icon={faLinkedin} />
      </IconButton>
    </Stack>
  </div>
);