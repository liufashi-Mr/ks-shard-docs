import React from 'react';
import { VolumeStatus } from '@ks-console/shared';

export default function Basic() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <div>
        <div>存储使用率: 65%</div>
        <VolumeStatus rate={65} />
      </div>
    </div>
  );
} 