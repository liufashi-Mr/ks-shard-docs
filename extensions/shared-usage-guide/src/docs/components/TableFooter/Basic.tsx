import React from 'react';
import { TableFooter } from '@ks-console/shared';

export default function Basic() {
  const mockInstance = {
    nextPage: () => {},
    previousPage: () => {},
    pageCount: 5,
    state: {
      pageIndex: 0,
      pageSize: 10
    },
    setPageSize: () => {},
    gotoPage: () => {}
  } as any;

  return (
    <div style={{ padding: '16px' }}>
      <TableFooter
        instance={mockInstance}
        totalCount={50}
        isShowTotalCount={true}
        isShowPagination={true}
      />
    </div>
  );
} 