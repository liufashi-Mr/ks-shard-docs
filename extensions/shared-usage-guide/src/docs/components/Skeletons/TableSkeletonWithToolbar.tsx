import React from 'react';
import { TableSkeleton } from '@ks-console/shared';

export default function TableSkeletonWithToolbar() {
  return (
    <div style={{ padding: '16px' }}>
      <TableSkeleton row={8} hasToolbar={true} />
    </div>
  );
} 