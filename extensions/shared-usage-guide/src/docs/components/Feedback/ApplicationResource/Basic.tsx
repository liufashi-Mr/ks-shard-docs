import React, { useState } from 'react';
import ResourceMonitorModal from '@ks-console/shared/lib/components/Modals/ApplicationResource';
import { Button } from '@kubed/components';

export default function Basic() {
  const [visible, setVisible] = useState(false);

  const appDetail = {
    name: 'nginx',
    namespace: 'default',
    replicas: 3,
    cpu: '100m',
    memory: '128Mi'
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        查看资源监控
      </Button>
      
      <ResourceMonitorModal
        visible={visible}
        detail={appDetail}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 