import React, { useState } from 'react';
import { EditAnnotationsModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function Basic() {
  const [visible, setVisible] = useState(false);

  const initialValues = {
    annotations: {
      'kubesphere.io/creator': 'admin',
      'kubesphere.io/description': 'Nginx deployment for production',
      'kubesphere.io/version': 'v1.0.0'
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        编辑注解
      </Button>
      
      <EditAnnotationsModal
        visible={visible}
        initialValues={initialValues}
        onOk={(value) => {
          console.log('保存的注解:', value);
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 