import React from 'react';

import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    CartesianAxis,
   
  } from 'recharts';

const Chart = () => {
    const assignment = [
        {
            name: 'HTML & CSS',
            get_marks: 26,
            highest_marks: 60,
        },
        {
            name: 'Responsive Design',
            get_marks: 48,
            highest_marks: 60,
        },
        {
            name: 'Project Using Framework',
            get_marks: 60,
            highest_marks: 60,
        },
        {
            name: 'First Javascript',
            get_marks: 52,
            highest_marks: 60,
        },
        {
            name: 'Integrate Javascript',
            get_marks: 55,
            highest_marks: 60,
        },
        {
            name: 'Browser Debug',
            get_marks: 60,
            highest_marks: 60,
        },
        {
            name: 'Intermatiade Javascript',
            get_marks: 57,
            highest_marks: 60,
        },
        {
            name: 'Simple React',
            get_marks: 60,
            highest_marks: 60,
        },
    ];

    return (
        <div>
             <div className='mt-20 flex justify-center '>
            <ComposedChart
                 width={900}
                 height={400}
                data={assignment}
                >
            <ResponsiveContainer></ResponsiveContainer>
            <CartesianGrid></CartesianGrid>
            <CartesianAxis></CartesianAxis>
            <Tooltip></Tooltip>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Area></Area>
            
            <Legend></Legend>
            <Bar dataKey="highest_marks" barSize={20} fill="#413ea0"></Bar>
             <Line type="monotone" dataKey="get_marks" stroke="#ff7300" />
            </ComposedChart>
        </div>
        </div>
    );
};

export default Chart;