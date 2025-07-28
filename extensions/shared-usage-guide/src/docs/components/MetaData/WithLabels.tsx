import React from 'react';
import { MetaData } from '@ks-console/shared';

export default function WithLabels() {
  const detail = {
    name: 'app-deployment',
    namespace: 'production',
    labels: {
      app: 'myapp',
      environment: 'production',
      team: 'backend',
      version: 'v2.1.0',
      'kubernetes.io/name': 'myapp'
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <MetaData detail={detail} />
    </div>
  );
} 