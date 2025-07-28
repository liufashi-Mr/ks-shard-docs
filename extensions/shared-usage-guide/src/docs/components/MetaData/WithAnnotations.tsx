import React from 'react';
import { MetaData } from '@ks-console/shared';

export default function WithAnnotations() {
  const detail = {
    name: 'db-service',
    namespace: 'database',
    annotations: {
      'kubesphere.io/creator': 'admin',
      'kubesphere.io/description': 'Database service for the application',
      'kubesphere.io/alias-name': 'db-service',
      'service.beta.kubernetes.io/aws-load-balancer-type': 'nlb',
      'service.beta.kubernetes.io/aws-load-balancer-scheme': 'internet-facing'
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <MetaData detail={detail} />
    </div>
  );
} 