import React, { useState } from 'react';
import { ChooseSpaceModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithDefaultVal() {
  const [visible, setVisible] = useState(false);

  const defaultVal = {
    namespace: 'default',
    workspace: 'my-workspace',
    cluster: 'production-cluster'
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        选择空间 (带默认值)
      </Button>
      
      <ChooseSpaceModal
        visible={visible}
        onOk={(data) => {
          console.log('选择的空间:', data);
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
        defaultVal={defaultVal}
      />
    </div>
  );
} 