import React from 'react';
import { Text } from '@ks-console/shared';

export default function Basic() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Text
        title="Pod 名称"
        description="nginx-deployment-7c6d4f8b5c"
      />
      
      <Text
        title="命名空间"
        description="default"
      />
      
      <Text
        title="状态"
        description="Running"
      />
    </div>
  );
} 