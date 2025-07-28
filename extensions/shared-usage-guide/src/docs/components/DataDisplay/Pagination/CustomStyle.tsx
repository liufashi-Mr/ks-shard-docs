import React, { useState } from 'react';
import { Pagination } from '@ks-console/shared';

export default function CustomStyle() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalCount = 100;
  const pageSize = 10;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h4>自定义样式 - 居中显示</h4>
        <Pagination
          totalCount={totalCount}
          page={currentPage}
          pageSize={pageSize}
          style={{ 
            display: 'flex', 
            justifyContent: 'center',
            padding: '16px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px'
          }}
          onNextPage={(page) => setCurrentPage(page)}
          onPreviousPage={(page) => setCurrentPage(page)}
          onGotoPage={(page) => setCurrentPage(page)}
        />
      </div>
      
      <div>
        <h4>自定义样式 - 右对齐</h4>
        <Pagination
          totalCount={totalCount}
          page={currentPage}
          pageSize={pageSize}
          style={{ 
            display: 'flex', 
            justifyContent: 'flex-end',
            padding: '12px',
            border: '1px solid #e1e5e9',
            borderRadius: '6px'
          }}
          onNextPage={(page) => setCurrentPage(page)}
          onPreviousPage={(page) => setCurrentPage(page)}
          onGotoPage={(page) => setCurrentPage(page)}
        />
      </div>
      
      <div>
        <h4>自定义样式 - 紧凑模式</h4>
        <Pagination
          totalCount={totalCount}
          page={currentPage}
          pageSize={pageSize}
          style={{ 
            fontSize: '12px',
            padding: '8px'
          }}
          onNextPage={(page) => setCurrentPage(page)}
          onPreviousPage={(page) => setCurrentPage(page)}
          onGotoPage={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
} 