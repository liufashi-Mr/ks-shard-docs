import React from 'react';
import { MediumArea } from '@ks-console/shared';

export default function Basic() {
  const data = [
    { time: '00:00', cpu: 20, memory: 30 },
    { time: '04:00', cpu: 25, memory: 35 },
    { time: '08:00', cpu: 40, memory: 45 },
    { time: '12:00', cpu: 35, memory: 40 },
    { time: '16:00', cpu: 50, memory: 55 },
    { time: '20:00', cpu: 45, memory: 50 },
    { time: '24:00', cpu: 30, memory: 35 },
  ];

  return (
    <MediumArea
      width={500}
      height={250}
      title="系统资源监控"
      unit="%"
      data={data}
      dataKey="time"
      categories={['memory', 'cpu']}
      showTooltip
      showXAxis
      showYAxis
      showGridLines
    />
  );
}
