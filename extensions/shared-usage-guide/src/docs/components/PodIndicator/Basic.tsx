import React from 'react';
import { PodIndicator } from '@ks-console/shared';

export default function Basic() {
  const podRecord = {
    name: 'nginx-pod',
    namespace: 'default',
    status: 'Running',
    ready: '1/1',
    restarts: 0,
    age: '2d',
    containers: [
      {
        name: 'nginx',
        image: 'nginx:1.21',
        ready: true,
        restartCount: 0,
        state: 'running'
      }
    ]
  };

  return (
    <div style={{ padding: '16px' }}>
      <PodIndicator
        module="pods"
        cluster="default-cluster"
        record={podRecord as any}
      />
    </div>
  );
} 