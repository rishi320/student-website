// TimeTable.js

import React from 'react';
import { styled } from '@mui/material/styles';
import { useTable } from 'react-table';
import { Divider, Chip, Card, CardContent, Typography } from '@mui/material';
import Header from '../Header/Header';
import { timetableData } from '../../data/timetable';
import "./TimeTable.css";


const TimeTable = () => {
    const columns = React.useMemo(
        () => [
          { Header: 'Subject', accessor: 'name' },
          { Header: 'Start Time', accessor: 'startTime' },
          { Header: 'End Time', accessor: 'endTime' },
          { Header: 'Teacher', accessor: 'teacher' },
        ],
        []
      );


  const data = React.useMemo(() => {
    return timetableData.flatMap((day) =>
      day.subjects.map((subject) => ({
        day: day.day,
        name: subject.name,
        startTime: subject.startTime,
        endTime: subject.endTime,
        teacher: subject.teacher,
      }))
    );
  }, [timetableData]);


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });



  return (
    <>
    <Header/>
    <Divider sx={{margin:"30px 0"}}>
        <Chip label="TimeTable from Monday - Saturday" />
      </Divider>
   <table {...getTableProps()} style={{ width: '100%' }}  className="timetable-table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
    <Divider sx={{margin:"30px 0"}}>
        <Chip label="Break Times" />
      </Divider>

      <Card sx={{width:"70%", margin:"auto", boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px'}}>
        <CardContent>
            <table className='timetable-table'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Start Time</th>
                        <th>End Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Interval-1</td>
                        <td>11:00 AM</td>
                        <td>11:30 AM</td>
                    </tr>
                    <tr>
                        <td>Lunch break</td>
                        <td>1:30 PM</td>
                        <td>2:30 PM</td>
                    </tr>
                    <tr>
                        <td>Interval-2</td>
                        <td>3:30 PM</td>
                        <td>4:00 PM</td>
                    </tr>
                </tbody>
            </table>
        </CardContent>
      </Card>
    </>  
  );
};

export default TimeTable;


