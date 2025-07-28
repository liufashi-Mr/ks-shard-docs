import React, { useState } from 'react';
import { NamespaceSelector } from '@ks-console/shared';

export default function Basic() {
  const [selectedNamespace, setSelectedNamespace] = useState('default');

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ marginBottom: '8px' }}>
        当前选择: {selectedNamespace}
      </div>
      <NamespaceSelector
        cluster="default-cluster"
        value={selectedNamespace}
        onChange={setSelectedNamespace}
      />
    </div>
  );
} 