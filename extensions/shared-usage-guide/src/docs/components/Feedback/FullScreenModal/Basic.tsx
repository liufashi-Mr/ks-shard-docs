import React, { useState } from 'react';
import { FullScreenModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function Basic() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        打开全屏模态框
      </Button>
      
      <FullScreenModal
        visible={visible}
        title="全屏模态框"
        onCancel={() => setVisible(false)}
      >
        <div style={{ padding: '20px' }}>
          <p>这是一个全屏模态框的内容</p>
          <p>您可以在这里放置任何内容</p>
        </div>
      </FullScreenModal>
    </div>
  );
} 