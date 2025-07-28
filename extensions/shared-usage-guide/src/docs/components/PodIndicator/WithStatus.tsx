import React from 'react';
import { PodIndicator } from '@ks-console/shared';

export default function WithStatus() {
  const runningPod = {
    name: 'nginx-running',
    namespace: 'default',
    status: 'Running',
    ready: '1/1',
    restarts: 0,
    age: '1d',
    containers: [{ name: 'nginx', ready: true, restartCount: 0, state: 'running' }]
  };

  const pendingPod = {
    name: 'nginx-pending',
    namespace: 'default',
    status: 'Pending',
    ready: '0/1',
    restarts: 0,
    age: '5m',
    containers: [{ name: 'nginx', ready: false, restartCount: 0, state: 'waiting' }]
  };

  const failedPod = {
    name: 'nginx-failed',
    namespace: 'default',
    status: 'Failed',
    ready: '0/1',
    restarts: 3,
    age: '10m',
    containers: [{ name: 'nginx', ready: false, restartCount: 3, state: 'error' }]
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <PodIndicator
        module="pods"
        cluster="default-cluster"
        record={runningPod as any}
      />
      <PodIndicator
        module="pods"
        cluster="default-cluster"
        record={pendingPod as any}
      />
      <PodIndicator
        module="pods"
        cluster="default-cluster"
        record={failedPod as any}
      />
    </div>
  );
} 