import React from 'react';
import { SimpleArea } from '@ks-console/shared';

export default function Basic() {
  const data = [
    { month: 'Jan', sales: 100, profit: 30 },
    { month: 'Feb', sales: 120, profit: 35 },
    { month: 'Mar', sales: 140, profit: 40 },
    { month: 'Apr', sales: 160, profit: 45 },
    { month: 'May', sales: 180, profit: 50 },
    { month: 'Jun', sales: 200, profit: 55 },
  ];

  return (
    <SimpleArea
      width={400}
      height={200}
      title="销售数据"
      unit="万元"
      data={data}
      colors={['red', 'green', 'yellow']}
      dataKey="month"
      categories={['profit', 'sales']}
      showTooltip
      showXAxis
      showYAxis
      showGridLines
    />
  );
}
