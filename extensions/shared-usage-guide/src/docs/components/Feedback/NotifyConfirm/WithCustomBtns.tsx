import React, { useState } from 'react';
import { NotifyConfirm } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithCustomBtns() {
  const [visible, setVisible] = useState(false);

  const handleConfirm = () => {
    console.log('确认操作');
    setVisible(false);
  };

  const handleCancel = () => {
    console.log('取消操作');
    setVisible(false);
  };

  const customButtons = (
    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
      <Button onClick={handleCancel}>
        稍后再说
      </Button>
      <Button color="primary" onClick={handleConfirm}>
        立即执行
      </Button>
    </div>
  );

  return (
    <div>
      <Button onClick={() => setVisible(true)}>
        显示自定义按钮对话框
      </Button>
      
      <NotifyConfirm
        visible={visible}
        title="自定义按钮"
        content="这个对话框使用了自定义的按钮布局"
        btns={customButtons}
        onCancel={handleCancel}
      />
    </div>
  );
} 