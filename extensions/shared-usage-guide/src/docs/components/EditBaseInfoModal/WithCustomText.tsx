import React, { useState } from 'react';
import { EditBaseInfoModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithCustomText() {
  const [visible, setVisible] = useState(false);

  const initialValues = {
    name: 'db-config',
    description: 'Database configuration',
    labels: {
      app: 'database',
      type: 'config'
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        编辑基本信息 (自定义文本)
      </Button>
      
      <EditBaseInfoModal
        visible={visible}
        initialValues={initialValues}
        okText="保存配置"
        cancelText="取消编辑"
        onOk={(value) => {
          console.log('保存的基本信息:', value);
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 