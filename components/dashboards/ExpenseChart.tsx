'use client'

import React, { useState } from 'react'
import { PieChart, Pie, Sector, ResponsiveContainer, Legend } from 'recharts';
import Card from '../cards/Card';
type Props = {}

export default function ExpenseChart({}: Props) {
  const [activeIndex, setActiveIndex] = useState(0)

  const data = [
    {
      name: 'Food & Beverages',
      value: 400000,
      fill: "rgb(220 38 38)"
    },
    {
      name: 'Transportation',
      value: 100000,
      fill: "rgb(234 88 12)"
    },
    {
      name: 'Shopping',
      value: 300000,
      fill: "rgb(96 165 250)"
    },
    {
      name: 'Internet',
      value: 200000,
      fill: "rgb(101 163 13)"
    },
    {
      name: 'Gift',
      value: 278000,
      fill: "rgb(13 148 136)"
    },
    {
      name: 'Other',
      value: 189000,
      fill: "rgb(163 163 163)"
    },
  ];

  return (
    <Card title="Expenses" className="h-80">
      <p className="text-slate-400 text-xs lg:text-sm">THIS MONTH</p>
      <p className="text-zinc-900 text-xl mt-0.5">
        IDR <span className="font-bold">1.937.000</span>
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={150} height={150}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            onClick={(_, index) => setActiveIndex(index)}
            onMouseEnter={(_, index) => setActiveIndex(index)}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  )
}

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value } = props;

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={-6}
        textAnchor="middle"
        fill={fill}
        style={{ fontSize: "14px" }}
      >
        {payload.name}
      </text>
      <text
        x={cx}
        y={cy}
        dy={16}
        textAnchor="middle"
        fill="rgb(24 24 27)"
        style={{ fontWeight: 'bold' }}
      >
        {value.toLocaleString("id-ID")}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
    </g>
  );
};