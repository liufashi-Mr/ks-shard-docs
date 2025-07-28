import React, { useState } from 'react';
import DownloadModal from '@ks-console/shared/lib/components/Modals/DownloadModal';
import { Button } from '@kubed/components';

export default function Basic() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        下载文件
      </Button>
      
      <DownloadModal
        visible={visible}
        title="文件下载"
        downloadUrl="/api/download"
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 