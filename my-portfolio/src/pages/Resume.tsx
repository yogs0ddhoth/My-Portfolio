import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// import benLinResume from '../assets/resume/Ben-Lin-Resume.pdf';
import '../assets/css/index.css';
import '../assets/css/style.css';

export default function Resume() {
  
  return (
    <div className='col-12 flex-row'>
      <h2 className='title col-12'>
        My Resume:<a href={'../assets/resume/Ben-Lin-Resume.pdf'} download={Resume} className='title col-12 align-start'>
        {/* <FontAwesomeIcon icon={solid('p')} /> */}
        download
        </a>
      </h2>
      
      <div className='title col-12 flex-row align-start'>
        <h3 className='col-12'>Proficiencies:</h3>
        <ul className='col-12 '>
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
        </ul>
      </div>
    </div>
  )
};