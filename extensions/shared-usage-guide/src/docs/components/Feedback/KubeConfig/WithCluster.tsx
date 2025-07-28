import React, { useState } from 'react';
import { KubeConfigModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithCluster() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        查看指定集群 kubeconfig
      </Button>
      
      <KubeConfigModal
        visible={visible}
        params={{
          cluster: 'production-cluster'
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 