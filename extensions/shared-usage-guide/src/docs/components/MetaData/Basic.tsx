import React from 'react';
import { MetaData } from '@ks-console/shared';

export default function Basic() {
  const detail = {
    name: 'nginx-deployment',
    namespace: 'default',
    uid: '12345678-1234-1234-1234-123456789abc',
    creationTimestamp: '2023-01-01T00:00:00Z',
    labels: {
      app: 'nginx',
      version: 'v1.0.0'
    },
    annotations: {
      'kubesphere.io/creator': 'admin',
      'kubesphere.io/description': 'Nginx deployment'
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <MetaData detail={detail} />
    </div>
  );
} 