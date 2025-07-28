import React, { useState } from 'react';
import { EditBaseInfoModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function Basic() {
  const [visible, setVisible] = useState(false);

  const initialValues = {
    name: 'nginx-deployment',
    description: 'Nginx web server deployment',
    labels: {
      app: 'nginx',
      version: 'v1.0.0'
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        编辑基本信息
      </Button>
      
      <EditBaseInfoModal
        visible={visible}
        initialValues={initialValues}
        onOk={(value) => {
          console.log('保存的基本信息:', value);
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 