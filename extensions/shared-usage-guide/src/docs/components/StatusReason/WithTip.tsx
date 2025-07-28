import React from 'react';
import { StatusReason } from '@ks-console/shared';

export default function WithTip() {
  const podData = {
    name: 'app-pod',
    namespace: 'production',
    status: 'CrashLoopBackOff',
    reason: 'Container failed to start'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <StatusReason
        data={podData}
        status="CrashLoopBackOff"
        reason="Container failed to start"
        type="pod"
        hasTip={true}
      />
      
      <StatusReason
        data={podData}
        status="OOMKilled"
        reason="Out of memory"
        type="pod"
        hasTip={true}
      />
    </div>
  );
} 