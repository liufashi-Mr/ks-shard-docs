import React from 'react';
import { VolumeStatus } from '@ks-console/shared';

export default function WithRates() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>低使用率:</span>
        <VolumeStatus rate={25} />
        <span>25%</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>中等使用率:</span>
        <VolumeStatus rate={60} />
        <span>60%</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>高使用率:</span>
        <VolumeStatus rate={85} />
        <span>85%</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>已满:</span>
        <VolumeStatus rate={100} />
        <span>100%</span>
      </div>
    </div>
  );
} 