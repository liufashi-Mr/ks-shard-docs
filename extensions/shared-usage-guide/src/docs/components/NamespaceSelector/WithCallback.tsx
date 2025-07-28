import React, { useState } from 'react';
import { NamespaceSelector } from '@ks-console/shared';

export default function WithCallback() {
  const [selectedNamespace, setSelectedNamespace] = useState('development');

  const handleNamespaceChange = (namespace: string) => {
    console.log('命名空间变化:', namespace);
    setSelectedNamespace(namespace);
  };

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ marginBottom: '8px' }}>
        当前选择: {selectedNamespace}
      </div>
      <NamespaceSelector
        cluster="development-cluster"
        value={selectedNamespace}
        onChange={handleNamespaceChange}
        pageSize={15}
      />
    </div>
  );
} 