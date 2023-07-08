// BarGraph.js

import React from 'react';
import { LineChart,Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {  Card, CardContent, List, ListItem, Typography, ListItemText } from '@mui/material';
import notifications from '../../data/notifications';

const data = [
  { term: 'Term 1', percentage: 80 },
  { term: 'Term 2', percentage: 90 },
  { term: 'Term 3', percentage: 70 },
  { term: 'Term 4', percentage: 85 },
  { term: 'Term 5', percentage: 75 },
];

const BarGraph = () => {
  return (
    <div style={{display:"flex", height:"500px"}}>
    <div style={{ width: '60%', paddingLeft:"24px" }}>
    <Card style={{ boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px' ,height:"100%"}}>
      <CardContent>
         <Typography variant="h5" component="div" align="center" gutterBottom>
        Percentage for each Term
      </Typography>
      <LineChart width={700} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="term" />
      <YAxis />
      <Tooltip />
      <Legend display={"term"}/>
      <Line type="monotone" dataKey="percentage" stroke="#683F3C" activeDot={{ r: 8 }} strokeWidth={3}/>
    </LineChart>

      </CardContent>
    </Card >
    </div>
    <div style={{ width: '35%', paddingLeft:"24px", height:"100%"}}>
    <Card style={{ boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',height:"100%", overflow: 'auto'}}>
            <CardContent>
            <Typography variant="h5" component="div" align="center" gutterBottom>
        Notifications
      </Typography>
      <List>
        {notifications.map((item,i)=><ListItem sx={{
            display:"flex",
            flexDirection:"column",
            padding:0,
            borderBottom: "1px solid grey"
        }}>
            <ListItemText>
                <div style={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"start", fontSize:"1.1em", fontWeight:"bold"}}>
                <p style={{margin:"0 25px 0 0"}}>{item.title}</p>
                <p style={{margin:"0"}}>{new Date(item.timestamp).toLocaleString()}</p>
                </div>                
            </ListItemText>
            <ListItemText sx={{padding:"10px"}}>
                {item.description}
            </ListItemText>
        </ListItem>)}
        
      </List>
            </CardContent>
    </Card>
    </div>
 
     
      
    </div>
  );
};

export default BarGraph;
