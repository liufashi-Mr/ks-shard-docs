import React, { useState } from 'react';
import { CreateWorkspacesModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithCustomWidth() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        创建工作空间 (自定义宽度)
      </Button>
      
      <CreateWorkspacesModal
        visible={visible}
        width={800}
        confirmLoading={false}
        onOk={(data) => {
          console.log('创建的工作空间:', data);
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 