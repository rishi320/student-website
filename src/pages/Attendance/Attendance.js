import React from 'react';
import createData from '../../data/createData';
import Calendar from '../../components/Calender/Calender';
import Header from '../../components/Header/Header';

function Attendance() {
    const attendanceData = createData();
    console.log("dataaa att", attendanceData)
  return (
    <div>
        <Header/>
        <h1>Student Attendance</h1>
      <Calendar attendanceData={attendanceData} />
    </div>
  )
}

export default Attendance