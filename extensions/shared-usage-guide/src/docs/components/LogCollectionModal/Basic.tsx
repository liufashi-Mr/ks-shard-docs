import React, { useState } from 'react';
import { LogCollectionModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function Basic() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        配置日志收集
      </Button>
      
      <LogCollectionModal
        visible={visible}
        enabled={true}
        onOk={() => {
          console.log('确认日志收集配置');
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 