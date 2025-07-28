import React from 'react';
import { PodsCard } from '@ks-console/shared';

export default function WithSearch() {
  const detail = {
    name: 'app-deployment',
    namespace: 'production',
    replicas: 5,
    ready: 5,
    available: 5
  };

  const handleSearch = (value: string) => {
    console.log('搜索:', value);
  };

  return (
    <div style={{ padding: '16px' }}>
      <PodsCard
        title="可搜索的 Pod 列表"
        detail={detail}
        limit={10}
        onSearch={handleSearch}
      />
    </div>
  );
} 