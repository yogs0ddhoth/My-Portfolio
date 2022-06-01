import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import benLinResume from '../assets/resume/Ben-Lin-Resume.pdf';
import '../assets/css/index.css';
import '../assets/css/style.css';

export default function Resume() {
  
  return (
    <div className='col-12 flex-row'>
      <h2 className='title col-12'>
        My Resume:<a href={benLinResume} download={Resume} className='title col-12 align-start'>
        {/* <FontAwesomeIcon icon={solid('p')} /> */}
        download
        </a>
      </h2>
      
      <div className='title col-12 flex-row align-start'>
        <h3 className='col-12'>Proficiencies:</h3>
        <ul className='col-12 '>
          <li>sed do</li>
          <li>eiusmod</li>
          <li>tempor incididunt</li>
          <li>ut labore</li>
          <li>et dolore</li>
          <li>magna aliqua</li>
        </ul>
      </div>
    </div>
  )
};