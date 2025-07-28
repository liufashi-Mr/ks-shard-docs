import React, { useState } from 'react';
import { EditAnnotationsModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithCustomText() {
  const [visible, setVisible] = useState(false);

  const initialValues = {
    annotations: {
      'kubesphere.io/creator': 'admin',
      'kubesphere.io/description': 'Database deployment'
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        编辑注解 (自定义文本)
      </Button>
      
      <EditAnnotationsModal
        visible={visible}
        initialValues={initialValues}
        okText="保存注解"
        cancelText="取消编辑"
        onOk={(value) => {
          console.log('保存的注解:', value);
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 