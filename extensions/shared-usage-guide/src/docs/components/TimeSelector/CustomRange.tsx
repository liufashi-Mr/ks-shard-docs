import React from 'react';
import { TimeSelector } from '@ks-console/shared';

export default function CustomRange() {
  return (
    <div style={{ padding: '16px' }}>
      <TimeSelector 
        renderCustom={true}
        showStep={true}
        timeOps={['30m', '1h', '3h', '6h', '12h', '1d']}
      />
    </div>
  );
} 