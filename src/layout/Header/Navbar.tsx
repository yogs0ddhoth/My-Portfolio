import React from 'react';
import { NavLink } from 'react-router-dom';

// import '../../assets/css/style.css';
import '../../assets/css/Navigation.css';

export const Navbar = () => (
  // <nav className='col-12 col-md-auto row align-end'>
  <ul className="flex flex-row">
    <li>
      <NavLink to="/" className="theme-2 text-stone-50">
        {/* <Text as='h2' fontSize={'2xl'}
            textShadow='0 4px 4px rgb(0 0 0 / 0.95)'
          >About</Text> */}
      </NavLink>
    </li>
    <li>
      <NavLink to="/portfolio" className="theme-2 text-stone-50">
        {/* <Text as='h2' fontSize={'2xl'}
            textShadow='0 4px 4px rgb(0 0 0 / 0.95)'
          >Portfolio</Text> */}
      </NavLink>
    </li>
    <li>
      <NavLink to="/contact" className="theme-2 text-stone-50">
        {/* <Text as='h2' fontSize={'2xl'}
            textShadow='0 4px 4px rgb(0 0 0 / 0.95)'
          >Contact</Text> */}
      </NavLink>
    </li>
    <li>
      <NavLink to="/resume" className="theme-2 text-stone-50">
        {/* <Text as='h2' fontSize={'2xl'}
            textShadow='0 4px 4px rgb(0 0 0 / 0.95)'
          >Resume</Text> */}
      </NavLink>
    </li>
  </ul>
  // </nav>
);
