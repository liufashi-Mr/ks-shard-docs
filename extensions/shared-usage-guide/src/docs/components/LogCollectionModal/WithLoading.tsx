import React, { useState } from 'react';
import { LogCollectionModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithLoading() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setLoading(true);
    // 模拟异步操作
    setTimeout(() => {
      console.log('日志收集配置已保存');
      setLoading(false);
      setVisible(false);
    }, 2000);
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        配置日志收集 (带加载)
      </Button>
      
      <LogCollectionModal
        visible={visible}
        enabled={true}
        confirmLoading={loading}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 