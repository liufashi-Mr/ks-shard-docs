import React from 'react';
import { Events } from '@ks-console/shared';

export default function DifferentModules() {
  const podDetail = {
    name: 'nginx-pod',
    namespace: 'default',
    uid: 'pod-12345678-1234-1234-1234-123456789abc'
  };

  const configMapDetail = {
    name: 'app-config',
    namespace: 'default',
    uid: 'configmap-87654321-4321-4321-4321-cba987654321'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4>Pod 事件</h4>
        <Events
          detail={podDetail}
          module="pods"
          showTitle={true}
        />
      </div>
      
      <div>
        <h4>ConfigMap 事件</h4>
        <Events
          detail={configMapDetail}
          module="configmaps"
          showTitle={true}
        />
      </div>
    </div>
  );
} 