import React, { useState } from 'react';
import { CreateWorkspacesModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithLoading() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOk = (data: any) => {
    setLoading(true);
    // 模拟异步操作
    setTimeout(() => {
      console.log('创建的工作空间:', data);
      setLoading(false);
      setVisible(false);
    }, 2000);
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        创建工作空间 (带加载)
      </Button>
      
      <CreateWorkspacesModal
        visible={visible}
        confirmLoading={loading}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 