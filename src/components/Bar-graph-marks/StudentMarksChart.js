import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import resultsData from '../../data/resultsData';

const StudentMarksChart = () => {
  const data = resultsData.subjects;

  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="marks" fill="#8E5752" barSize={20} radius={[10, 10, 0, 0]}/>
    </BarChart>
  );
};

export default StudentMarksChart;
