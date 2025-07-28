import React, { useState } from 'react';
import { ProviderSelector } from '@ks-console/shared';

export default function WithValue() {
  const [selectedProvider, setSelectedProvider] = useState('aws');

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ marginBottom: '8px' }}>
        当前选择: {selectedProvider}
      </div>
      <ProviderSelector 
        value={selectedProvider}
        onChange={setSelectedProvider}
      />
    </div>
  );
} 