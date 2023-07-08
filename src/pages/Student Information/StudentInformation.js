import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, List, ListItem, ListItemText, Card, CardContent, Divider } from '@mui/material';
import studentData from '../../data/studentData';
import Header from '../../components/Header/Header';

const styledDivider = styled(Divider)(({ theme }) => ({
//   margin:  theme.spacing(3, 0),
}))

function StudentInformation() {
    const { name, age, grade, address, contact, guardian, guardianContact, courses, attendance, grades, achievements } = studentData;


  return (
    <>
     <Header/>
     <Divider textAlign="left" sx={{marginTop:"20px", fontSize:"1.3em", fontWeight:"bold"}}>STUDENT INFORMATION</Divider>
     <Card>
        <CardContent sx={{textAlign:"left", padding:"20px 9%"}}>
        <Typography variant="h5" component="div" gutterBottom>
        {name}
      </Typography>

      <Typography variant="body1" gutterBottom>
        Age: {age}
      </Typography>

      <Typography variant="body1" gutterBottom>
        Grade: {grade}
      </Typography>

      <Typography variant="body1" gutterBottom>
        Address: {address}
      </Typography>

      <Typography variant="body1" gutterBottom>
        Contact: {contact}
      </Typography>

      <Typography variant="body1" gutterBottom>
        Guardian: {guardian}
      </Typography>

      <Typography variant="body1" gutterBottom>
        Guardian Contact: {guardianContact}
      </Typography>

        </CardContent>
     </Card>
     <Divider textAlign="left" sx={{marginTop:"20px", fontSize:"1.3em", fontWeight:"bold"}}>COURSES</Divider>
     <Card>
    <CardContent sx={{textAlign:"left", padding:"20px 10%"}}>
      
      <List>
        {courses.map((course) => (
          <ListItem key={course} sx={{padding:"0"}}>
            <ListItemText primary={course} />
          </ListItem>
        ))}
      </List>     
    </CardContent>
    </Card>
    </>
  )
}

export default StudentInformation