// CardList.js

import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Card, CardContent, Typography } from '@mui/material';


const StyledGrid = styled(Grid)(({ theme }) => ({
    height:"100%",
  flexGrow: 1,
//   margin: theme.spacing(2, 0),
  padding:  theme.spacing(3, 3),
}));

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '200px', // Adjust the height as needed
    backgroundColor: "#F0E6E5",
    color: theme.palette.primary.contrastText,
  }));

const CardList = () => {
  return (
    <StyledGrid container spacing={4}>
      <Grid item xs={12} sm={6} md={3}>
        <StyledCard>
          <CardContent sx={{height:"100%",display:"flex",flexDirection:"column", justifyContent:"space-evenly", alignItems:"center"}}>
            <Typography variant="h5" component="div" sx={{color:"#683F3C"}}>
              Attendance
            </Typography>
            <Typography variant="body1" color="#0A122A">
              This month percentage - 97%
            </Typography>
          </CardContent>
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StyledCard>
          <CardContent  sx={{height:"100%",display:"flex",flexDirection:"column", justifyContent:"space-evenly", alignItems:"center"}}>
            <Typography variant="h5" component="div" sx={{color:"#683F3C"}}>
              Percentage
            </Typography>
            <Typography variant="body1" color="#0A122A">
              Last term ExamResults - 88%
            </Typography>
          </CardContent>
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StyledCard>
          <CardContent sx={{height:"100%",display:"flex",flexDirection:"column", justifyContent:"space-evenly", alignItems:"center"}}>
            <Typography variant="h5" component="div" sx={{color:"#683F3C"}}>
              Term Fee
            </Typography>
            <Typography variant="body1" color="#0A122A">
              Unpaid Fee- (Rs.25000)
            </Typography>
          </CardContent>
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StyledCard>
          <CardContent sx={{height:"100%",display:"flex",flexDirection:"column", justifyContent:"space-evenly", alignItems:"center"}}>
            <Typography variant="h5" component="div" sx={{color:"#683F3C"}}>
              Homework
            </Typography>
            <Typography variant="body1" color="#0A122A">
              Today's - Telugu, Maths, History
            </Typography>
          </CardContent>
        </StyledCard>
      </Grid>
    </StyledGrid>
  );
};

export default CardList;
