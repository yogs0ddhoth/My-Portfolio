import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/css/style.css';
import '../../assets/css/Navigation.css';

export default function Navigation(props) {
  // TODO: add underline styling to links when active
  return (
    <nav className='col-12 col-md-auto row align-end'>
      <ul className='flex-row'>
        <li>
          <NavLink to='/' className='theme-2'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/portfolio' className='theme-2'>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' className='theme-2'>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to='/resume' className='theme-2'>
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  )
};