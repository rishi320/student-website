import { Card, CardContent, Typography, Divider, Chip } from '@mui/material';
import React from 'react';
import StudentMarksChart from '../../components/Bar-graph-marks/StudentMarksChart';

import Header from '../../components/Header/Header';
import CustomPieChart from '../../components/Pie-chart/PieChart';
import resultsData from '../../data/resultsData';

function ExamResults() {
    const { percentage } = resultsData;
    const response = `Great job ${resultsData.name}! Your performance in the subjects is impressive. Keep up the good work and continue to strive for excellence.`;

  return (
    <div>
      <Header/>
      <div style={{display:"flex"}}>
      <Card sx={{ width: "40%", margin:"25px", boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px' }}>
       <CardContent sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
       <Typography variant="h5" component="div">
          Percentage
        </Typography>
        <CustomPieChart percentage={percentage} />
       </CardContent> 
      </Card>
      <Card sx={{ width: "50%", margin:"25px", boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px' }}>
        <CardContent sx={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center", gap:"50px"}}>
        <Typography variant="h5" component="div" >
          Marks in Subjects
        </Typography>
        <StudentMarksChart/>
        </CardContent>
      </Card>
      </div>
      <Divider>
    <Chip label="Total marks" />
  </Divider>
    <Typography variant='h2' sx={{margin:"10px 0 20px 0"}}>
        {resultsData.totalMarks} marks out of {(resultsData.subjects.length)*100}
    </Typography>

    <Divider>
    <Chip label="Homeroom Teacher's Remarks" />
  </Divider>
  <Typography variant='h4' sx={{margin:"20px", textAlign:"left"}}>
        {response}
    </Typography>
    </div>
  )
}

export default ExamResults