import React, { useState } from 'react';
import { ResourceMonitorModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithDetail() {
  const [visible, setVisible] = useState(false);

  const detail = {
    name: 'app-deployment',
    namespace: 'production',
    replicas: 5,
    cpu: '1000m',
    memory: '2Gi',
    status: 'Running',
    creationTimestamp: '2023-01-01T00:00:00Z'
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        查看详细监控
      </Button>
      
      <ResourceMonitorModal
        visible={visible}
        detail={detail}
        workspace="my-workspace"
        cluster="production-cluster"
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 