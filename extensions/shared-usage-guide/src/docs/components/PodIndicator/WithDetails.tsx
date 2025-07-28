import React from 'react';
import { PodIndicator } from '@ks-console/shared';

export default function WithDetails() {
  const multiContainerPod = {
    name: 'app-pod',
    namespace: 'production',
    status: 'Running',
    ready: '2/2',
    restarts: 1,
    age: '3d',
    containers: [
      {
        name: 'app',
        image: 'myapp:v1.0.0',
        ready: true,
        restartCount: 0,
        state: 'running'
      },
      {
        name: 'sidecar',
        image: 'sidecar:v2.1.0',
        ready: true,
        restartCount: 1,
        state: 'running'
      }
    ],
    nodeName: 'worker-node-1',
    podIP: '10.244.1.5'
  };

  return (
    <div style={{ padding: '16px' }}>
      <PodIndicator
        module="pods"
        cluster="production-cluster"
        record={multiContainerPod as any}
      />
    </div>
  );
} 