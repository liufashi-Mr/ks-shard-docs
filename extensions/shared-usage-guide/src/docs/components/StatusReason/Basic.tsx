import React from 'react';
import { StatusReason } from '@ks-console/shared';

export default function Basic() {
  const podData = {
    name: 'nginx-pod',
    namespace: 'default',
    status: 'Pending',
    reason: 'ContainerCreating'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <StatusReason
        data={podData}
        status="Pending"
        reason="ContainerCreating"
        type="pod"
      />
      
      <StatusReason
        data={podData}
        status="Failed"
        reason="ImagePullBackOff"
        type="pod"
      />
    </div>
  );
} 