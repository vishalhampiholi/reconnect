import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { ChartDataPoint } from '../types';

const data: ChartDataPoint[] = [
  { month: 'Jan', happiness: 80 },
  { month: 'Feb', happiness: 85 },
  { month: 'Mar', happiness: 90 },
  { month: 'Apr', happiness: 88 },
  { month: 'May', happiness: 95 },
  { month: 'Last Month', happiness: 20, label: 'The Fight 😔' },
  { month: 'Now', happiness: 40, label: 'Missing You' },
  { month: 'Future', happiness: 100, label: 'Back Together 🚀' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-rose-200 shadow-lg rounded-lg">
        <p className="text-rose-700 font-bold">{label}</p>
        <p className="text-slate-600">Happiness Level: {payload[0].value}%</p>
        {payload[0].payload.label && (
          <p className="text-sm italic text-rose-500 mt-1">{payload[0].payload.label}</p>
        )}
      </div>
    );
  }
  return null;
};

export const HappinessChart: React.FC = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px] bg-white p-4 rounded-xl shadow-md border border-rose-100">
      <h3 className="text-center text-xl font-serif font-semibold text-slate-800 mb-4">
        Projected Happiness Trajectory
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#fecdd3" vertical={false} />
          <XAxis dataKey="month" stroke="#881337" tick={{ fill: '#881337' }} />
          <YAxis hide domain={[0, 110]} />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine x="Last Month" stroke="red" strokeDasharray="3 3" label={{ position: 'top', value: 'The break', fill: 'red', fontSize: 12 }} />
          <Line
            type="monotone"
            dataKey="happiness"
            stroke="#e11d48"
            strokeWidth={3}
            dot={{ r: 6, fill: '#e11d48', strokeWidth: 2, stroke: '#fff' }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-center text-sm text-slate-500 mt-4 italic">
        *Data based on scientific analysis of how much happier I am with you.
      </p>
    </div>
  );
};