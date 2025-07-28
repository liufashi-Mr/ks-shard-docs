import React from 'react';
import { Events } from '@ks-console/shared';

export default function Basic() {
  const detail = {
    name: 'nginx-deployment',
    namespace: 'default',
    uid: '12345678-1234-1234-1234-123456789abc'
  };

  return (
    <div style={{ padding: '16px' }}>
      <Events
        detail={detail}
        module="deployments"
      />
    </div>
  );
} 