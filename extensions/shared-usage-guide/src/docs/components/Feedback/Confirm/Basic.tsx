import React, { useState } from 'react';
import { ConfirmModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function Basic() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        显示确认对话框
      </Button>
      
      <ConfirmModal
        title="确认删除"
        description="确定要删除这个应用吗？此操作不可撤销。"
        visible={visible}
        onOk={() => {
          console.log('用户确认删除');
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 