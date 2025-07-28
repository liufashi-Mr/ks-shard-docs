import React, { useState } from 'react';
import { ConfirmModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithIcon() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        显示警告确认对话框
      </Button>
      
      <ConfirmModal
        title="危险操作警告"
        description="这是一个危险操作，请谨慎执行。"
        titleIconProps={{
          type: 'warning'
        }}
        visible={visible}
        onOk={() => {
          console.log('用户确认执行');
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 