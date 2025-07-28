import React, { useState } from 'react';
import { StopModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithCustomDesc() {
  const [visible, setVisible] = useState(false);

  const handleOk = () => {
    console.log('确认停止');
    setVisible(false);
  };

  const handleCancel = () => {
    console.log('取消停止');
    setVisible(false);
  };

  return (
    <div>
      <Button onClick={() => setVisible(true)}>
        停止应用 (自定义描述)
      </Button>
      
      <StopModal
        visible={visible}
        type="Application"
        resource="my-app"
        title="停止应用确认"
        desc="停止应用将导致所有相关的 Pod 被终止，请确认是否继续？"
        app="my-app"
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
} 