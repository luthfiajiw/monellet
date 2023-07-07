'use client'

import React from 'react'
import { faker } from '@faker-js/faker';
import { CartesianGrid, Legend, Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Card from '../cards/Card';

type Props = {}

export default function BalanceTrend({}: Props) {
  const labels = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
  ];

  const data = labels.map(label => {
    return {
      label,
      'Dompet': faker.number.int({ min: 250000, max: 350000 }),
      'BCA': faker.number.int({ min: 2800000, max: 3000000 }),
      'Dana Syariah': faker.number.int({ min: 11800000, max: 12000000 }),
    }
  })

  return (
    <Card title='Balance Trend' className="mt-2 lg:mt-4 h-72">
      <p className="text-slate-400 text-xs lg:text-sm">TOTAL</p>
      <p className="text-zinc-900 text-xl mt-0.5 mb-4">
        IDR <span className="font-bold">15.350.000</span>
      </p>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          data={data}
          margin={{
            top: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area type="monotone" stackId="1" dataKey="Dompet" stroke="rgb(251, 191, 36)" fill='rgb(251, 191, 36)' />
          <Area type="monotone" stackId="1" dataKey="BCA" stroke="rgb(3, 105, 161)" fill='rgb(3, 105, 161)' />
          <Area type="monotone" stackId="1" dataKey="Dana Syariah" stroke="rgb(101, 163, 13)" fill='rgb(101, 163, 13)' />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  )
}

const CustomTooltip = ({ active, payload, label } : any) => {
  if (active && payload && payload.length) {
    return (
      <div className="felx flex-col gap-1 backdrop-blur-sm bg-white bg-opacity-70 p-2 rounded-md">
        {payload && payload.map((data: any) => {
          return <p>
            {data.name}: Rp{data.value.toLocaleString("id-ID")}
          </p>
        })}
      </div>
    );
  }

  return null;
};