import React, { useState } from 'react';
import { EditLabelsModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithResourceKind() {
  const [visible, setVisible] = useState(false);

  const initialValues = {
    labels: {
      'kubernetes.io/metadata.name': 'default',
      'kubesphere.io/workspace': 'system-workspace',
      'kubesphere.io/creator': 'admin'
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        编辑命名空间标签
      </Button>
      
      <EditLabelsModal
        visible={visible}
        initialValues={initialValues}
        resourceKind="Namespace"
        onOk={(value) => {
          console.log('保存的标签:', value);
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 