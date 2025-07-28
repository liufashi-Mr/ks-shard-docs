import React from 'react';
import { Terminal } from '@ks-console/shared';

export default function Basic() {
  return (
    <div style={{ height: '400px', border: '1px solid #ddd' }}>
      <Terminal
        websocketUrl="ws://localhost:8080/terminal"
        initText="Welcome to Kubernetes Terminal\n"
        isLoading={false}
      />
    </div>
  );
} 