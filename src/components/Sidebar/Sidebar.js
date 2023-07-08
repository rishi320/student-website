// Sidebar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  IconButton,
  ListItemIcon,
  Avatar,
  Toolbar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// const StyledDrawer = styled(Drawer)(({ theme }) => ({
//   "& .MuiDrawer-paper": {
//     width: "240px",
//     boxSizing: "border-box",
//     background: "#FBFAF8",
//     color: "#0A122A",
//   },
// }));

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
  }
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => theme.mixins.toolbar);




const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {isMobile ? (
        <IconButton
          color="inherit"
          aria-label="open sidebar"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      ) : null}
      <StyledDrawer
        variant={isMobile ? "temporary" : "permanent"}
        anchor="left"
        open={isMobile ? open : true}
        onClose={handleDrawerToggle}
      >
        <List >
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <Avatar src="/broken-image.jpg" />
            </ListItemIcon>

            <ListItemText primary="Hi, Student Name" />
          </ListItem>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" sx={{textAlign:"center"}} />
          </ListItem>
          <ListItem button component={Link} to="/student-info">
            <ListItemText primary="Student Information" sx={{textAlign:"center"}}/>
          </ListItem>
          <ListItem button component={Link} to="/results">
            <ListItemText primary="Exam Results" sx={{textAlign:"center"}}/>
          </ListItem>
          <ListItem button component={Link} to="/attendance">
            <ListItemText primary="Attendance" sx={{textAlign:"center"}}/>
          </ListItem>
          <ListItem button component={Link} to="/timetable">
            <ListItemText primary="Time Table" sx={{textAlign:"center"}}/>
          </ListItem>
        </List>
      </StyledDrawer>
     
    </>
  );
};

export default Sidebar;
