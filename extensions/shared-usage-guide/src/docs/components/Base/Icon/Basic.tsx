import React from 'react';
import { Icon } from '@ks-console/shared';

export default function Basic() {
  return (
    <>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Icon name="pod" />
        <Icon name="app-mysql" />
        <Icon name="click-house" />
        <Icon name="deep-learning" />
        <Icon name="git" />
        <Icon name="elk" />
        <Icon name="aliyun" />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Icon name="pod" color="red" />
        <Icon name="app-mysql" color="orange" />
        <Icon name="click-house" color="yellow" />
        <Icon name="deep-learning" color="green" />
        <Icon name="git" color="blue" />
        <Icon name="elk" color="indigo" />
        <Icon name="aliyun" color="purple" />
      </div>
    </>
  );
}
