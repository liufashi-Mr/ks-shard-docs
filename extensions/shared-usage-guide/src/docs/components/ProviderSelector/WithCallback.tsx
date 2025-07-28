import React, { useState } from 'react';
import { ProviderSelector } from '@ks-console/shared';

export default function WithCallback() {
  const [selectedProvider, setSelectedProvider] = useState('gcp');

  const handleProviderChange = (provider: string) => {
    console.log('提供商变化:', provider);
    setSelectedProvider(provider);
  };

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ marginBottom: '8px' }}>
        当前选择: {selectedProvider}
      </div>
      <ProviderSelector 
        value={selectedProvider}
        onChange={handleProviderChange}
      />
    </div>
  );
} 