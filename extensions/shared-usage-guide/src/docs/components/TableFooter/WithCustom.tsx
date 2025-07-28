import React from 'react';
import { TableFooter } from '@ks-console/shared';

export default function WithCustom() {
  const mockInstance = {
    nextPage: () => {},
    previousPage: () => {},
    pageCount: 3,
    state: {
      pageIndex: 1,
      pageSize: 15
    },
    setPageSize: () => {},
    gotoPage: () => {}
  } as any;

  return (
    <div style={{ padding: '16px' }}>
      <TableFooter
        instance={mockInstance}
        totalCount={45}
        isShowTotalCount={true}
        isShowPagination={true}
        isShowSetPageSize={true}
        isShowDivider={true}
        style={{ backgroundColor: '#f5f5f5' }}
      />
    </div>
  );
} 