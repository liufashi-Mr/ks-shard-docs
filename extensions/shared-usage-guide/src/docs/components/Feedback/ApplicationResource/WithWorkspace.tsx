import React, { useState } from 'react';
import ResourceMonitorModal from '@ks-console/shared/lib/components/Modals/ApplicationResource';
import { Button } from '@kubed/components';

export default function WithWorkspace() {
  const [visible, setVisible] = useState(false);

  const appDetail = {
    name: 'redis',
    namespace: 'cache',
    replicas: 2,
    cpu: '200m',
    memory: '256Mi'
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        查看工作空间资源监控
      </Button>
      
      <ResourceMonitorModal
        visible={visible}
        detail={appDetail}
        workspace="production"
        cluster="prod-cluster"
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 