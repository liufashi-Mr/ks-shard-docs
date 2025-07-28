import React, { useState } from 'react';
import { RecreateModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithCustomProps() {
  const [visible, setVisible] = useState(false);

  const handleOk = () => {
    console.log('确认重建');
    setVisible(false);
  };

  const handleCancel = () => {
    console.log('取消重建');
    setVisible(false);
  };

  const modalProps = {
    width: 600,
    centered: true
  };

  return (
    <div>
      <Button onClick={() => setVisible(true)}>
        重建 ConfigMap (自定义属性)
      </Button>
      
      <RecreateModal
        visible={visible}
        name="app-config"
        type="ConfigMap"
        onOk={handleOk}
        onCancel={handleCancel}
        modalProps={modalProps}
      />
    </div>
  );
} 