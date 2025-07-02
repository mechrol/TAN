import React from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', value: 2 },
  { name: 'Feb', value: 3 },
  { name: 'Mar', value: 8 },
  { name: 'Apr', value: 6 },
  { name: 'May', value: 9 },
  { name: 'Jun', value: 4 },
  { name: 'Jul', value: 7 },
  { name: 'Aug', value: 5 },
  { name: 'Sep', value: 3 },
  { name: 'Oct', value: 2 },
  { name: 'Nov', value: 1 },
  { name: 'Dec', value: 0 }
]

export default function MembersChart() {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Community Members</h3>
        <div className="text-sm text-gray-500">Monthly Data</div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 flex items-center space-x-2">
        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
        <span className="text-sm text-gray-600">Community Members</span>
      </div>
    </div>
  )
}
