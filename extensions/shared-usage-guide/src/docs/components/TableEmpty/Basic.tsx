import React from 'react';
import { TableEmpty } from '@ks-console/shared';

export default function Basic() {
  return (
    <div style={{ padding: '16px', height: '300px' }}>
      <TableEmpty
        description="暂无 Deployment 资源"
      />
    </div>
  );
} 