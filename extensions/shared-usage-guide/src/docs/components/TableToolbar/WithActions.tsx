import React from 'react';
import { TableToolbar } from '@ks-console/shared';

export default function WithActions() {
  const mockInstance = {
    state: { globalFilter: '' },
    setGlobalFilter: () => {},
    preGlobalFilteredRows: [],
    globalFilteredRows: []
  } as any;

  const batchActions = (
    <div style={{ display: 'flex', gap: '8px' }}>
      <button>删除</button>
      <button>重启</button>
      <button>编辑</button>
    </div>
  );

  return (
    <div style={{ padding: '16px' }}>
      <TableToolbar
        instance={mockInstance}
        placeholder="搜索资源..."
        batchActions={batchActions}
      />
    </div>
  );
} 