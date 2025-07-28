import React, { useState } from 'react';
import { StopModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function Basic() {
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
        停止 Deployment
      </Button>
      
      <StopModal
        visible={visible}
        type="Deployment"
        resource="nginx-deployment"
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
} 