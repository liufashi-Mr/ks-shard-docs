import React, { useState } from 'react';
import { EditYamlModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithYaml() {
  const [visible, setVisible] = useState(false);

  const yamlContent = `apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  namespace: default
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.19
        ports:
        - containerPort: 80`;

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        编辑 Deployment YAML
      </Button>
      
      <EditYamlModal
        visible={visible}
        yaml={yamlContent}
        onOk={(yaml) => {
          console.log('保存的 YAML:', yaml);
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
        onChange={(yaml) => {
          console.log('YAML 内容变化:', yaml);
        }}
      />
    </div>
  );
} 