import React from 'react';
import { CopyButton } from '@ks-console/shared';

export default function Basic() {
  return (
    <div style={{ padding: 16 }}>
      <CopyButton value="kubectl get pods" label="复制命令" />
    </div>
  );
} 