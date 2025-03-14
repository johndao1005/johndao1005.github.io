import React, { useState } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { routerMap } from '../router';
import { RouteItem } from 'constant/interface';

const drawerWidth = 240;

export default function DrawerAppBar(props: { window?: () => Window }) {
  const navigate = useNavigate();
  const location = useLocation(); // Add this to get current path
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavigate = (selectedPage: string) => {
    navigate(selectedPage);
  }

  const isActive = (path: string) => {
    return location.pathname === path;
  };


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        JD
      </Typography>
      <Divider />
      <List>
        {(routerMap as RouteItem[]).map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              onClick={() => handleNavigate(item.path)}
              sx={{
                textAlign: 'center',
                backgroundColor: isActive(item.path) ? 'rgb(167, 167, 169)' : 'rgba(253, 253, 253, 0.71)',
                fontWeight: isActive(item.path) ? 'strong' : 'normal',

              }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', }}>

      <AppBar component="nav">
        <Toolbar sx={{
          display: 'flex', justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >
            {location.pathname}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {(routerMap as RouteItem[]).map((item) => (
              <Button key={item.name} sx={{
                color: isActive(item.path) ? 'rgb(253, 253, 255)' : 'rgba(253, 253, 253, 0.71)',
                '&:hover': {
                  color: 'rgba(253, 253, 253, 0.5)', fontSize: '0.9rem', fontWeight: 'bold'
                },
                textDecoration: isActive(item.path) ? 'underline' : 'none',
                textUnderlineOffset: '4px'
              }} onClick={() => handleNavigate(item.path)}>
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

    </Box>
  );
}