import React from 'react';
import { TableToolbar } from '@ks-console/shared';

export default function Basic() {
  const mockInstance = {
    state: { globalFilter: '' },
    setGlobalFilter: () => {},
    preGlobalFilteredRows: [],
    globalFilteredRows: []
  } as any;

  return (
    <div style={{ padding: '16px' }}>
      <TableToolbar
        instance={mockInstance}
        placeholder="搜索资源..."
      />
    </div>
  );
} 