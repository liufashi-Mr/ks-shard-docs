import React, { useState } from 'react';
import { LogCollectionModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithModalProps() {
  const [visible, setVisible] = useState(false);

  const modalProps = {
    title: '日志收集配置',
    width: 600,
    centered: true
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        配置日志收集 (自定义属性)
      </Button>
      
      <LogCollectionModal
        visible={visible}
        enabled={false}
        modalProps={modalProps}
        onOk={() => {
          console.log('确认日志收集配置');
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 