import React, { useState } from 'react';
import DownloadModal from '@ks-console/shared/lib/components/Modals/DownloadModal';
import { Button } from '@kubed/components';

export default function WithCustomTitle() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        下载配置文件
      </Button>
      
      <DownloadModal
        visible={visible}
        title="下载 Kubernetes 配置文件"
        downloadUrl="/api/config/download"
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 