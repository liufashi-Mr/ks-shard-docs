import React from 'react';
import { TableHead } from '@ks-console/shared';

export default function Basic() {
  const mockColumn = {
    id: 'name',
    Header: '名称',
    accessor: 'name',
    isSorted: false,
    isSortedDesc: false,
    canSort: true,
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
                selectType={false}
              />
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
} 