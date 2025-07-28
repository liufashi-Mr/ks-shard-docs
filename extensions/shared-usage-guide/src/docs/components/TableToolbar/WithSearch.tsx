import React from 'react';
import { TableToolbar } from '@ks-console/shared';

export default function WithSearch() {
  const mockInstance = {
    state: { globalFilter: '' },
    setGlobalFilter: () => {},
    preGlobalFilteredRows: [],
    globalFilteredRows: []
  } as any;

  const suggestions = [
    { label: 'Running', key: 'Running' },
    { label: 'Pending', key: 'Pending' },
    { label: 'Failed', key: 'Failed' }
  ];

  return (
    <div style={{ padding: '16px' }}>
      <TableToolbar
        instance={mockInstance}
        placeholder="搜索 Pod 状态..."
        suggestions={suggestions}
        simpleSearch={true}
      />
    </div>
  );
} 