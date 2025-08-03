import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'primary.main', fontWeight: 'bold' }}>
          Mopify
        </Typography>
        <Button color="inherit" href="#features">Features</Button>
        <Button color="inherit" href="#contact">Contact</Button>
        <Button variant="contained" color="primary">Get Started</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;