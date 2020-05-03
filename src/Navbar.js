import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import './Navbar.css';


function Logo() {
return <Box className="Logo">
    <Typography variant="h4">
    AA
    </Typography>
  </Box>
}
function Navbar() {
  return (
    <Box className="Navbar">
      <Logo />
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Box>
  )
}

export default Navbar;