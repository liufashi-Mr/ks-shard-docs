import React from 'react';
import { StatusReason } from '@ks-console/shared';

export default function WithEvents() {
  const podData = {
    name: 'db-pod',
    namespace: 'database',
    status: 'Failed',
    reason: 'Pod scheduling failed'
  };

  const handleShowEvents = () => {
    console.log('显示 Pod 事件');
    alert('查看 Pod 事件');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <StatusReason
        data={podData}
        status="Failed"
        reason="Pod scheduling failed"
        type="pod"
        hasTip={true}
        onShowEvents={handleShowEvents}
      />
      
      <StatusReason
        data={podData}
        status="Pending"
        reason="Unschedulable"
        type="pod"
        hasTip={true}
        onShowEvents={handleShowEvents}
      />
    </div>
  );
} 