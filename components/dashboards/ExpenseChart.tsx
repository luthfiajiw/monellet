'use client'

import React, { useState } from 'react'
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
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
      value: 300000,
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
    <div className="
      py-2
      px-4
      h-80 w-inherit
      mr-4 ml-4
      bg-white
      rounded-lg
      shadow-md shadow-neutral-200
      flex flex-col items-start
    ">
      <p className="text-lg pb-2 mb-3 border-b border-neutral-200 w-full">
        Expenses
      </p>
      <p className="text-slate-400 text-xs lg:text-sm">THIS MONTH</p>
      <p className="text-zinc-900 text-xl mt-0.5">
        IDR <span className="font-bold">1.937.000</span>
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={100} height={100}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
            onClick={(_, index) => setActiveIndex(index)}
            onMouseEnter={(_, index) => setActiveIndex(index)}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);

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
        {value.toLocaleString()}
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