import React from 'react';
import { VolumeStatus } from '@ks-console/shared';

export default function CustomStyle() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ padding: '8px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <VolumeStatus rate={45} className="custom-volume" />
      </div>
      
      <div style={{ padding: '8px', backgroundColor: '#e8f4fd', borderRadius: '4px' }}>
        <VolumeStatus rate={75} className="custom-volume" />
      </div>
      
      <div style={{ padding: '8px', backgroundColor: '#fff3cd', borderRadius: '4px' }}>
        <VolumeStatus rate={90} className="custom-volume" />
      </div>
    </div>
  );
} 