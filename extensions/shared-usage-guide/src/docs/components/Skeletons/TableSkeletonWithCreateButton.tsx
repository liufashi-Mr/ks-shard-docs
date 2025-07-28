import React from 'react';
import { TableSkeleton } from '@ks-console/shared';

export default function TableSkeletonWithCreateButton() {
  return (
    <div style={{ padding: '16px' }}>
      <TableSkeleton row={6} hasCreateButton={true} hasToolbar={true} />
    </div>
  );
} 