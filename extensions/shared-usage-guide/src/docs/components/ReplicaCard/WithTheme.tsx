import React from 'react';
import { ReplicaCard } from '@ks-console/shared';

export default function WithTheme() {
  const detail = {
    name: 'db-deployment',
    namespace: 'database',
    replicas: 2,
    ready: 2,
    available: 2,
    updated: 2
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h4>Light 主题</h4>
        <ReplicaCard
          module="deployments"
          detail={detail}
          theme="light"
          chartSize={120}
        />
      </div>
      
      <div>
        <h4>Dark 主题</h4>
        <ReplicaCard
          module="deployments"
          detail={detail}
          theme="dark"
          chartSize={120}
        />
      </div>
    </div>
  );
} 