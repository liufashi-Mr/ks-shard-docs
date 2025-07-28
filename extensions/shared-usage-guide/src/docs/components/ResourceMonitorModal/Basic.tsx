import React, { useState } from 'react';
import { ResourceMonitorModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function Basic() {
  const [visible, setVisible] = useState(false);

  const detail = {
    name: 'nginx-deployment',
    namespace: 'default',
    replicas: 3
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        查看资源监控
      </Button>
      
      <ResourceMonitorModal
        visible={visible}
        detail={detail}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 