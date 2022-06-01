import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

import '../../assets/css/style.css';
import '../../assets/css/Footer.css';

export default function Footer(props) {
  return (
    <div className='footer theme-2 col-12 pt-3'>
      
      <ul className='col-12 flex-row'>

        <li className="icon email col-2 col-1-sm row justify-center">
          <a href="mailto:blin7.webdev@gmail.com" className='col-12 row'>
            {/* <i className="theme-2 fas fa-envelope fa-2x align-start"></i> */}
            <FontAwesomeIcon className="theme-2 align-start fa-2x" icon={solid('envelope')} />
          </a>
        </li>
        <li className="icon col-2 col-1-sm row justify-center">
          <a href="https://github.com/yogs0ddhoth" className='col-12 row'>
            {/* <i className="theme-2 fab fa-github fa-2x align-start"></i> */}
            <FontAwesomeIcon className="theme-2 align-start fa-2x" icon={faGithub} />
          </a>
        </li>
        <li className="icon col-2 col-1-sm row justify-center">
          <a href="https://stackoverflow.com/users/17608484/blin" className='col-12 row'>
            {/* <i className="theme-2 fab fa-stack-overflow fa-2x align-start"></i> */}
            <FontAwesomeIcon className="theme-2 align-start fa-2x" icon={faStackOverflow} />
          </a>
        </li>
        <li className="icon col-2 col-1-sm row justify-center">
          <a href="https://www.linkedin.com/in/ben-lin-b70a79227/" className='col-12 row'>
            <FontAwesomeIcon className="theme-2 align-start fa-2x" icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </div>
  )
};