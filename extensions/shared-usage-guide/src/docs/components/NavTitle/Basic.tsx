import React from 'react';
import { NavTitle } from '@ks-console/shared';
import { Icon } from '@ks-console/shared';

export default function Basic() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <NavTitle
        icon={<Icon name="pod" />}
        title="Pod 管理"
      />
      
      <NavTitle
        icon={<Icon name="deployment" />}
        title="Deployment 管理"
      />
      
      <NavTitle
        icon={<Icon name="service" />}
        title="Service 管理"
      />
    </div>
  );
} 