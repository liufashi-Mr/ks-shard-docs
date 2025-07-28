import React from 'react';
import { TableSkeleton } from '@ks-console/shared';

export default function TableSkeletonBasic() {
  return (
    <div style={{ padding: '16px' }}>
      <TableSkeleton row={5} />
    </div>
  );
} 