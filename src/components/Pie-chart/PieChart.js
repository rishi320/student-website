import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const CustomPieChart = ({ percentage }) => {
    const data = [
        { name: 'Percentage', value: percentage },
        { name: 'Remaining', value: 100 - percentage },
      ];
    
      const COLORS = ['#824F4A', '#E7DECD'];
      const innerRadius = 140; // Inner radius size in pixels
      const outerRadius = 150; // Outer radius size in pixels

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={90}
        endAngle={-270}
        paddingAngle={1}
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default CustomPieChart;
