import React from 'react';
import { NavLink } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import '../../assets/css/style.css';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const navigation = [
    {item: "About", link: "/"},
    {item: "Portfolio", link: "/portfolio"},
    {item: "Contact", link: "/contact"},
    {item: "Resume", link: "/resume"}
  ]
  return (
    <div className='relative'>
      <IconButton
        id="navigation-button"
        aria-controls={ open ? 'navigation-menu' : undefined }
        aria-haspopup="true"
        aria-expanded={ open ? 'true' : undefined }
        aria-label="menu"
        onClick={handleClick}
        className='text-6xl justify-self-end'
      >
        {/* <MenuIcon 
          // color='primary'
          className='text-stone-50 drop-shadow-icon'
          fontSize={'large'}
        /> */}
        <FontAwesomeIcon className="fa-lg drop-shadow-icon" icon={faBars} />
      </IconButton>
      <Menu
        id="navigation-menu"
        aria-labelledby="navigation-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={
          {vertical: "top", horizontal: "left"}
        }
        transformOrigin={
          {vertical: "top", horizontal: "left"}
        }
      >
        {
          navigation.map(nav => (
            <NavLink to={nav.link} className='theme-2 text-stone-50'>
              <MenuItem>{nav.item}</MenuItem>
            </NavLink>
          ))
        }
      </Menu>
    </div>
  )
};