import React, { useState } from 'react';
import { KubectlModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithNode() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        在指定节点执行 kubectl
      </Button>
      
      <KubectlModal
        visible={visible}
        title="节点 kubectl 终端"
        params={{
          nodename: 'worker',
          isEdgeNode: false
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 