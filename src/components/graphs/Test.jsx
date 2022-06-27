import React, { PureComponent } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import '../../style/kpi.css'

function Graph() {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ]

  return (
    <ResponsiveContainer width="100%">
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid vertical={false} strokeDashArray="3 3" />
        <Tooltip
          wrapperStyle={{ backgroundColor: 'red' }}
          labelStyle={{ color: 'green' }}
          itemStyle={{ color: 'cyan' }}
          formatter={function (value, name) {
            return `${value}`
          }}
          labelFormatter={function (value) {
            return `label: ${value}`
          }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          fill="url(#colorValue)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default Graph
