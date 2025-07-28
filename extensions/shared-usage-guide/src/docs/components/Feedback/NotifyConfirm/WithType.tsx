import React, { useState } from 'react';
import { NotifyConfirm } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithType() {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState('warning');

  const handleConfirm = () => {
    console.log('确认操作');
    setVisible(false);
  };

  const handleCancel = () => {
    console.log('取消操作');
    setVisible(false);
  };

  const showConfirm = (confirmType: string) => {
    setType(confirmType);
    setVisible(true);
  };

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button onClick={() => showConfirm('warning')}>
        警告确认
      </Button>
      <Button onClick={() => showConfirm('error')}>
        错误确认
      </Button>
      <Button onClick={() => showConfirm('info')}>
        信息确认
      </Button>
      
      <NotifyConfirm
        visible={visible}
        type={type}
        title="确认操作"
        content="这是一个不同类型的确认对话框"
        confirmText="确认"
        cancelText="取消"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
} 