import React, { useState } from 'react';
import { InfoConfirmModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function Basic() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        显示信息确认
      </Button>
      
      <InfoConfirmModal
        visible={visible}
        title="系统通知"
        content="系统将在 10 分钟后进行维护，请保存您的工作。"
        onOk={() => {
          console.log('用户确认');
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 