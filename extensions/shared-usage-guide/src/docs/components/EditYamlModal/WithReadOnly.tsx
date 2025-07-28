import React, { useState } from 'react';
import { EditYamlModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithReadOnly() {
  const [visible, setVisible] = useState(false);

  const yamlContent = `apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
  namespace: default
data:
  database_url: "mysql://localhost:3306/mydb"
  api_key: "your-api-key"
  debug: "true"`;

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        查看 ConfigMap YAML (只读)
      </Button>
      
      <EditYamlModal
        visible={visible}
        yaml={yamlContent}
        readOnly={true}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
} 