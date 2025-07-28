import React from 'react';
import { SimpleCircle } from '@ks-console/shared';

export default function Basic() {
  return (
    <SimpleCircle
      width={200}
      height={200}
      title="磁盘使用率"
      value={75}
      total={100}
      unit="%"
      showCenter={true}
      showRate={true}
      showRatio={true}
      colors={['#52c41a', '#f0f0f0']}
      categories={['已使用', '剩余']}
    />
  );
}
