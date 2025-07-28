import React from 'react';
import { Terminal } from '@ks-console/shared';

export default function WithUploadDownload() {
  return (
    <div style={{ height: '400px', border: '1px solid #ddd' }}>
      <Terminal
        websocketUrl="ws://localhost:8080/terminal"
        uploadUrl="/api/terminal/upload"
        downloadUrl="/api/terminal/download"
        initText="Terminal with File Transfer Support\n"
        isLoading={false}
      />
    </div>
  );
} 