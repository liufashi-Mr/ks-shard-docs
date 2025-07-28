import React, { useState } from 'react';
import { NotifyConfirm } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function Basic() {
  const [visible, setVisible] = useState(false);

  const handleConfirm = () => {
    console.log('确认操作');
    setVisible(false);
  };

  const handleCancel = () => {
    console.log('取消操作');
    setVisible(false);
  };

  return (
    <div>
      <Button onClick={() => setVisible(true)}>
        显示确认对话框
      </Button>
      
      <NotifyConfirm
        visible={visible}
        title="确认删除"
        content="确定要删除这个 Pod 吗？此操作不可撤销。"
        confirmText="删除"
        cancelText="取消"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
} 