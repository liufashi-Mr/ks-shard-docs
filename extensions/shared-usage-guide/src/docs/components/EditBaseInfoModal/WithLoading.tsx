import React, { useState } from 'react';
import { EditBaseInfoModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithLoading() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: 'app-service',
    description: 'Application service',
    labels: {
      app: 'myapp',
      environment: 'production'
    }
  };

  const handleOk = (value: any) => {
    setLoading(true);
    // 模拟异步操作
    setTimeout(() => {
      console.log('保存的基本信息:', value);
      setLoading(false);
      setVisible(false);
    }, 2000);
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        编辑基本信息 (带加载)
      </Button>
      
      <EditBaseInfoModal
        visible={visible}
        initialValues={initialValues}
        confirmLoading={loading}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 