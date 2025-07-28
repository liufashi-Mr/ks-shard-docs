import React from 'react';
import { NavTitle } from '@ks-console/shared';
import { Icon } from '@ks-console/shared';

export default function WithClick() {
  const handlePodClick = () => {
    console.log('点击了 Pod 管理');
  };

  const handleDeploymentClick = () => {
    console.log('点击了 Deployment 管理');
  };

  const handleServiceClick = () => {
    console.log('点击了 Service 管理');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <NavTitle
        icon={<Icon name="pod" />}
        title="Pod 管理 (可点击)"
        subtitle="点击查看详情"
        onClick={handlePodClick}
      />
      
      <NavTitle
        icon={<Icon name="deployment" />}
        title="Deployment 管理 (可点击)"
        subtitle="点击查看详情"
        onClick={handleDeploymentClick}
      />
      
      <NavTitle
        icon={<Icon name="service" />}
        title="Service 管理 (可点击)"
        subtitle="点击查看详情"
        onClick={handleServiceClick}
      />
    </div>
  );
} 