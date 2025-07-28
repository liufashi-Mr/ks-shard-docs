import React from 'react';
import { TinyArea } from '@ks-console/shared';

export default function Basic() {
  const data = [
    { time: '00:00', value: 10 },
    { time: '02:00', value: 20 },
    { time: '04:00', value: 15 },
    { time: '06:00', value: 30 },
    { time: '08:00', value: 25 },
    { time: '10:00', value: 40 },
    { time: '12:00', value: 35 },
    { time: '14:00', value: 50 },
    { time: '16:00', value: 45 },
    { time: '18:00', value: 60 },
    { time: '20:00', value: 55 },
    { time: '22:00', value: 70 },
  ];

  return (
    <TinyArea
      width={300}
      height={100}
      title="CPU 使用率"
      unit="%"
      data={data}
      dataKey="time"
      categories={['value']}
      showTooltip={true}
      showXAxis={false}
      showYAxis={false}
      showGridLines={false}
    />
  );
}
