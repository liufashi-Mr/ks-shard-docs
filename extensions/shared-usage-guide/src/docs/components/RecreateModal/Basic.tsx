import React, { useState } from 'react';
import { RecreateModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function Basic() {
  const [visible, setVisible] = useState(false);

  const handleOk = () => {
    console.log('确认重建');
    setVisible(false);
  };

  const handleCancel = () => {
    console.log('取消重建');
    setVisible(false);
  };

  return (
    <div>
      <Button onClick={() => setVisible(true)}>
        重建 Deployment
      </Button>
      
      <RecreateModal
        visible={visible}
        name="nginx-deployment"
        type="Deployment"
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
} 