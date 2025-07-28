import React, { useState } from 'react';
import { ChooseSpaceModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithCallbacks() {
  const [visible, setVisible] = useState(false);

  const handleOk = (data: any) => {
    console.log('确认选择的空间:', data);
    setVisible(false);
  };

  const handleCancel = () => {
    console.log('取消选择');
    setVisible(false);
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        选择空间 (带回调)
      </Button>
      
      <ChooseSpaceModal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        defaultVal={{}}
      />
    </div>
  );
} 