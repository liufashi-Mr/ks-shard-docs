import React, { useState } from 'react';
import { EditLabelsModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithCustomText() {
  const [visible, setVisible] = useState(false);

  const initialValues = {
    labels: {
      app: 'database',
      version: 'v2.0.0',
      environment: 'staging'
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        编辑标签 (自定义文本)
      </Button>
      
      <EditLabelsModal
        visible={visible}
        initialValues={initialValues}
        okText="保存标签"
        cancelText="取消编辑"
        onOk={(value) => {
          console.log('保存的标签:', value);
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 