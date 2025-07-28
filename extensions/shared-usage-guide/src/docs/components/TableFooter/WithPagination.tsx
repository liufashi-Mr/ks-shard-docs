import React from 'react';
import { TableFooter } from '@ks-console/shared';

export default function WithPagination() {
  const mockInstance = {
    nextPage: () => {},
    previousPage: () => {},
    pageCount: 10,
    state: {
      pageIndex: 2,
      pageSize: 20
    },
    setPageSize: () => {},
    gotoPage: () => {}
  } as any;

  return (
    <div style={{ padding: '16px' }}>
      <TableFooter
        instance={mockInstance}
        totalCount={200}
        isShowTotalCount={true}
        isShowPagination={true}
        isShowSetPageSize={true}
      />
    </div>
  );
} 