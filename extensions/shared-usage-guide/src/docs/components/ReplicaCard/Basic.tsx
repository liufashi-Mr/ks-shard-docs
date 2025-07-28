import React from 'react';
import { ReplicaCard } from '@ks-console/shared';

export default function Basic() {
  const detail = {
    name: 'nginx-deployment',
    namespace: 'default',
    replicas: 3,
    ready: 3,
    available: 3,
    updated: 3
  };

  return (
    <div style={{ padding: '16px' }}>
      <ReplicaCard
        module="deployments"
        detail={detail}
      />
    </div>
  );
} 