import React from 'react';
import { Events } from '@ks-console/shared';

export default function WithTitle() {
  const detail = {
    name: 'app-service',
    namespace: 'production',
    uid: '87654321-4321-4321-4321-cba987654321'
  };

  return (
    <div style={{ padding: '16px' }}>
      <Events
        detail={detail}
        module="services"
        showTitle={true}
      />
    </div>
  );
} 