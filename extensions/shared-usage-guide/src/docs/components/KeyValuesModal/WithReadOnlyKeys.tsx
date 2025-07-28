import React, { useState } from 'react';
import { KeyValuesModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithReadOnlyKeys() {
  const [visible, setVisible] = useState(false);

  const initialValues = {
    labels: {
      app: 'nginx',
      version: 'v1.0.0',
      'system/created-by': 'admin',
      'system/created-at': '2023-01-01'
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        编辑标签 (只读键)
      </Button>
      
      <KeyValuesModal
        title="编辑标签"
        fieldName="labels"
        visible={visible}
        initialValues={initialValues}
        readOnlyKeys={['system/created-by', 'system/created-at']}
        onOk={(value) => {
          console.log('保存的标签:', value);
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 