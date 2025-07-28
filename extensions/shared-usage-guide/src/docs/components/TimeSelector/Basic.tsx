import React from 'react';
import { TimeSelector } from '@ks-console/shared';

export default function Basic() {
  return (
    <div style={{ padding: '16px' }}>
      <TimeSelector 
        showStep={true}
        timeOps={['1h', '6h', '12h', '1d', '7d']}
      />
    </div>
  );
} 