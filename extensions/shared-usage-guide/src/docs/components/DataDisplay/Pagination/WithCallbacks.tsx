import React, { useState } from 'react';
import { Pagination } from '@ks-console/shared';

export default function WithCallbacks() {
  const [currentPage, setCurrentPage] = useState(1);
  const [log, setLog] = useState<string[]>([]);
  const totalCount = 200;
  const pageSize = 20;

  const addLog = (message: string) => {
    setLog(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const handleNextPage = (page: number) => {
    setCurrentPage(page);
    addLog(`跳转到下一页: ${page}`);
  };

  const handlePreviousPage = (page: number) => {
    setCurrentPage(page);
    addLog(`跳转到上一页: ${page}`);
  };

  const handleGotoPage = (page: number) => {
    setCurrentPage(page);
    addLog(`直接跳转到页面: ${page}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h4>带回调函数的分页</h4>
        <Pagination
          totalCount={totalCount}
          page={currentPage}
          pageSize={pageSize}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
          onGotoPage={handleGotoPage}
        />
      </div>
      
      <div>
        <h4>操作日志</h4>
        <div style={{ 
          border: '1px solid #ddd', 
          padding: '8px', 
          borderRadius: '4px',
          maxHeight: '200px',
          overflowY: 'auto',
          backgroundColor: '#f5f5f5'
        }}>
          {log.length === 0 ? (
            <span style={{ color: '#999' }}>暂无操作记录</span>
          ) : (
            log.map((item, index) => (
              <div key={index} style={{ fontSize: '12px', marginBottom: '4px' }}>
                {item}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
} 