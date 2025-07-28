import React, { useState } from 'react';
import { KubeConfigModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function Basic() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        查看 kubeconfig
      </Button>
      
      <KubeConfigModal
        visible={visible}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 