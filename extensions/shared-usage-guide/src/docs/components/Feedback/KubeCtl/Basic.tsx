import React, { useState } from 'react';
import { KubectlModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function Basic() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        打开 kubectl
      </Button>
      
      <KubectlModal
        visible={visible}
        title="kubectl 终端"
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 