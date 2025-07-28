import React, { useState } from 'react';
import { RecreateModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithLoading() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setLoading(true);
    // 模拟异步操作
    setTimeout(() => {
      console.log('重建完成');
      setLoading(false);
      setVisible(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('取消重建');
    setVisible(false);
  };

  return (
    <div>
      <Button onClick={() => setVisible(true)}>
        重建 Service (带加载)
      </Button>
      
      <RecreateModal
        visible={visible}
        name="nginx-service"
        type="Service"
        confirmLoading={loading}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
} 