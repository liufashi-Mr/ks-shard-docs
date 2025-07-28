import React from 'react';
import { PodsCard } from '@ks-console/shared';

export default function WithRefresh() {
  const detail = {
    name: 'db-deployment',
    namespace: 'database',
    replicas: 2,
    ready: 2,
    available: 2
  };

  const handleRefresh = () => {
    console.log('刷新 Pod 列表');
  };

  const handlePageChange = (page: number) => {
    console.log('切换到页面:', page);
  };

  return (
    <div style={{ padding: '16px' }}>
      <PodsCard
        title="可刷新的 Pod 列表"
        detail={detail}
        limit={10}
        onRefresh={handleRefresh}
        onPageChange={handlePageChange}
      />
    </div>
  );
} 