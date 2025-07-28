import React, { useState } from 'react';
import { NamespaceSelector } from '@ks-console/shared';

export default function WithWorkspace() {
  const [selectedNamespace, setSelectedNamespace] = useState('production');

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ marginBottom: '8px' }}>
        当前选择: {selectedNamespace}
      </div>
      <NamespaceSelector
        cluster="production-cluster"
        workspace="my-workspace"
        value={selectedNamespace}
        onChange={setSelectedNamespace}
        pageSize={20}
      />
    </div>
  );
} 