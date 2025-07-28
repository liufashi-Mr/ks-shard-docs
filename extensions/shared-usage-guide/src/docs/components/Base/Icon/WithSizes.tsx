import React from 'react';
import { Icon } from '@ks-console/shared';

export default function WithSizes() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon size={16} name="pod" />
      <Icon size={24} name="app-mysql" />
      <Icon size={32} name="click-house" />
      <Icon size={48} name="deep-learning" />
      <Icon size={64} name="aliyun" />
    </div>
  );
}
