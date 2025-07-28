import React, { useState } from 'react';
import { EditAnnotationsModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithHiddenKeys() {
  const [visible, setVisible] = useState(false);

  const initialValues = {
    annotations: {
      'kubesphere.io/creator': 'admin',
      'kubesphere.io/description': 'Application deployment',
      'internal/secret-key': 'secret-value',
      'internal/config': 'config-value'
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        编辑注解 (隐藏键)
      </Button>
      
      <EditAnnotationsModal
        visible={visible}
        initialValues={initialValues}
        hiddenKeys={['internal/secret-key', 'internal/config']}
        onOk={(value) => {
          console.log('保存的注解:', value);
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 