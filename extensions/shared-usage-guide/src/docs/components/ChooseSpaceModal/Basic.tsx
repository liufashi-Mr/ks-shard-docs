import React, { useState } from 'react';
import { ChooseSpaceModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function Basic() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        选择空间
      </Button>
      
      <ChooseSpaceModal
        visible={visible}
        onOk={(data) => {
          console.log('选择的空间:', data);
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
        defaultVal={{}}
      />
    </div>
  );
} 