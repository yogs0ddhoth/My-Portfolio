import React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';

import Footer from '../Footer';
import Typography from '@mui/material/Typography';

export default function Header() {
  const [state, setState] = React.useState(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
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
    <Box
      className="h-[100vh]"
      sx={{
        width: 250,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { item: 'About', link: '/' },
          { item: 'Portfolio', link: '/portfolio' },
          { item: 'Contact', link: '/contact' },
          { item: 'Resume', link: '/resume' },
        ].map(({ item, link }) => (
          <ListItem key={item} disablePadding>
            <ListItemButton onClick={() => navigate(link)}>
              <Typography className="text-pink-500">{item}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon className="drop-shadow-icon" />
      </IconButton>
      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        <DrawerList />
        <Divider />
        <Footer />
      </Drawer>
    </>
  );
}
