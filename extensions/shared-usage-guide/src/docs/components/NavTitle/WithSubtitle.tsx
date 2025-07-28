import React from 'react';
import { NavTitle } from '@ks-console/shared';
import { Icon } from '@ks-console/shared';

export default function WithSubtitle() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <NavTitle
        icon={<Icon name="pod" />}
        title="Pod 详情"
        subtitle="nginx-deployment-7c6d4f8b5c"
      />
      
      <NavTitle
        icon={<Icon name="deployment" />}
        title="Deployment 配置"
        subtitle="管理应用的部署配置"
      />
      
      <NavTitle
        icon={<Icon name="service" />}
        title="Service 网络"
        subtitle="配置服务发现和负载均衡"
      />
    </div>
  );
} 