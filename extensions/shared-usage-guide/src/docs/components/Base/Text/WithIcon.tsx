import React from 'react';
import { Text } from '@ks-console/shared';

export default function WithIcon() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Text
        icon="pod"
        title="Pod 资源"
        description="nginx-deployment-7c6d4f8b5c"
      />
      
      <Text
        icon="deployment"
        title="Deployment"
        description="nginx-deployment"
      />
      
      <Text
        icon="service"
        title="Service"
        description="nginx-service"
      />
    </div>
  );
} 