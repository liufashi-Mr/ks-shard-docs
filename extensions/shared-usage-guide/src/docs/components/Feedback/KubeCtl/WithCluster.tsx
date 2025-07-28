import React, { useState } from 'react';
import { KubectlModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithCluster() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        集群查询 kubectl
      </Button>
      
      <KubectlModal
        visible={visible}
        title="集群查询终端"
        params={{
          cluster: 'member',
          isClusterQuery: true
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 