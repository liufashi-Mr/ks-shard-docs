import React, { useState } from 'react';
import { StopModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithLoading() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setLoading(true);
    // 模拟异步操作
    setTimeout(() => {
      console.log('停止完成');
      setLoading(false);
      setVisible(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('取消停止');
    setVisible(false);
  };

  return (
    <div>
      <Button onClick={() => setVisible(true)}>
        停止 Service (带加载)
      </Button>
      
      <StopModal
        visible={visible}
        type="Service"
        resource="nginx-service"
        confirmLoading={loading}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
} 