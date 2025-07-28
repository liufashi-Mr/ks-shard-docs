import React from 'react';
import { PodsCard } from '@ks-console/shared';

export default function Basic() {
  const detail = {
    name: 'nginx-deployment',
    namespace: 'default',
    replicas: 3,
    ready: 3,
    available: 3
  };

  return (
    <div style={{ padding: '16px' }}>
      <PodsCard
        title="Pod 列表"
        detail={detail}
        limit={10}
      />
    </div>
  );
} 