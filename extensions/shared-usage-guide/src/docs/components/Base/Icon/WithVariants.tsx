import React from 'react';
import { Icon } from '@ks-console/shared';

export default function WithVariants() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span>Dark:</span>
        <Icon name="pod" variant="dark" />
        <Icon name="aliyun" variant="dark" />
        <Icon name="git" variant="dark" />
      </div>

      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span>Coloured:</span>
        <Icon name="pod" variant="coloured" />
        <Icon name="aliyun" variant="coloured" />
        <Icon name="git" variant="coloured" />
      </div>

      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', background: '#797575' }}>
        <span>Light:</span>
        <Icon name="pod" variant="light" />
        <Icon name="aliyun" variant="light" />
        <Icon name="git" variant="light" />
      </div>
    </div>
  );
}
