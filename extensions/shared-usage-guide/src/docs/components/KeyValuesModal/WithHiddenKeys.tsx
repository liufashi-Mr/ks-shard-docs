import React, { useState } from 'react';
import { KeyValuesModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithHiddenKeys() {
  const [visible, setVisible] = useState(false);

  const initialValues = {
    annotations: {
      'kubesphere.io/creator': 'admin',
      'kubesphere.io/description': 'Nginx deployment',
      'kubesphere.io/version': 'v1.0.0',
      'internal/secret': 'hidden-value'
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        编辑注解 (隐藏键)
      </Button>
      
      <KeyValuesModal
        title="编辑注解"
        fieldName="annotations"
        visible={visible}
        initialValues={initialValues}
        hiddenKeys={['internal/secret']}
        onOk={(value) => {
          console.log('保存的注解:', value);
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 