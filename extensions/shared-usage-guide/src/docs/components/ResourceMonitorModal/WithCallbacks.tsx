import React, { useState } from 'react';
import { ResourceMonitorModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithCallbacks() {
  const [visible, setVisible] = useState(false);

  const detail = {
    name: 'db-deployment',
    namespace: 'database',
    replicas: 2
  };

  const handleCancel = () => {
    console.log('关闭资源监控模态框');
    setVisible(false);
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        查看监控 (带回调)
      </Button>
      
      <ResourceMonitorModal
        visible={visible}
        detail={detail}
        workspace="db-workspace"
        cluster="database-cluster"
        onCancel={handleCancel}
      />
    </div>
  );
} 