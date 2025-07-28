import React from 'react';
import { TableHead } from '@ks-console/shared';

export default function WithCheckbox() {
  const mockColumn = {
    id: 'select',
    Header: '选择',
    accessor: 'select',
    isSorted: false,
    isSortedDesc: false,
    canSort: false,
    getSortByToggleProps: () => ({}),
    toggleSortBy: () => {}
  } as any;

  return (
    <div style={{ padding: '16px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>
              <TableHead
                column={mockColumn}
                selectType="checkbox"
              />
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
} 