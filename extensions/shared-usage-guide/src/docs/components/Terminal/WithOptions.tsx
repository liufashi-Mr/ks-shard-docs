import React from 'react';
import { Terminal } from '@ks-console/shared';

export default function WithOptions() {
  const terminalOptions = {
    fontSize: 14,
    fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
    theme: {
      background: '#1e1e1e',
      foreground: '#ffffff',
      cursor: '#ffffff'
    },
    cols: 80,
    rows: 24
  };

  return (
    <div style={{ height: '400px', border: '1px solid #ddd' }}>
      <Terminal
        websocketUrl="ws://localhost:8080/terminal"
        terminalOptions={terminalOptions}
        initText="Custom Terminal Configuration\n"
        isLoading={false}
      />
    </div>
  );
} 