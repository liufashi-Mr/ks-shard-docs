import React, { useState } from 'react';
import { EditYamlModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function Basic() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        编辑 YAML
      </Button>
      
      <EditYamlModal
        visible={visible}
        yaml=""
        onOk={(yaml) => {
          console.log('保存的 YAML:', yaml);
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 