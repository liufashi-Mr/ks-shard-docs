import React, { useState } from 'react';
import { Pagination } from '@ks-console/shared';

export default function Basic() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalCount = 150;
  const pageSize = 10;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h4>基本分页</h4>
        <Pagination
          totalCount={totalCount}
          page={currentPage}
          pageSize={pageSize}
          onNextPage={(page) => setCurrentPage(page)}
          onPreviousPage={(page) => setCurrentPage(page)}
          onGotoPage={(page) => setCurrentPage(page)}
        />
      </div>
      
      <div>
        <h4>不显示总数</h4>
        <Pagination
          totalCount={totalCount}
          page={currentPage}
          pageSize={pageSize}
          showTotal={false}
          onNextPage={(page) => setCurrentPage(page)}
          onPreviousPage={(page) => setCurrentPage(page)}
          onGotoPage={(page) => setCurrentPage(page)}
        />
      </div>
      
      <div>
        <h4>小数据量分页</h4>
        <Pagination
          totalCount={25}
          page={1}
          pageSize={10}
          onNextPage={(page) => console.log('Next page:', page)}
          onPreviousPage={(page) => console.log('Previous page:', page)}
          onGotoPage={(page) => console.log('Go to page:', page)}
        />
      </div>
    </div>
  );
} 