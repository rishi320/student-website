// Header.js

import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Button, useMediaQuery,
    useTheme } from '@mui/material';




const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  color:"#FBFAF8",
  fontWeight:500
}));

const Header = () => {
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: "#BC8F8A",
    position: 'sticky',
    top: 0,
    zIndex: isMobile ? theme.zIndex.drawer + 1 :  0 ,
    padding:0
  }));

  return (
    <StyledAppBar>
      <StyledToolbar>
        <StyledTypography variant="h5">Student Management System</StyledTypography>
        {/* <Button color="inherit">Login</Button> */}
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
