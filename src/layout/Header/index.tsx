import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Footer from '../Footer';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';


export default function() {
  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState(open);
    };
  const navigate = useNavigate();
  const DrawerList = () => (
    <Box className='h-[100vh]'
      sx={{ 
        // bgcolor:'background.default', 
        width: 250
        // height: full
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          {item: "About", link: "/"},
          {item: "Portfolio", link: "/portfolio"},
          {item: "Contact", link: "/contact"},
          {item: "Resume", link: "/resume"}
          ].map(({item, link}) => (
          <ListItem key={item} disablePadding>
            <ListItemButton onClick={() => navigate(link)}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <Typography className='text-pink-500'>{item}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <>
      {/* {
        <React.Fragment key='right'> */}
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon className='drop-shadow-icon'/>
          </IconButton>
          <Drawer
            anchor='right'
            open={state}
            onClose={toggleDrawer(false)}
            className='flex flex-col justify-end'
          >
            <DrawerList />
            <Divider />
            <Footer />
            <Typography variant='caption' align='center'>
              image courtesy of <Link className='text-[#fff] underline hover:cursor-pointer' href='https://unsplash.com/@marekpiwnicki'>Marek Piwnicki</Link>
            </Typography>
          </Drawer>
        {/* </React.Fragment>
      } */}
    </>
  );
};