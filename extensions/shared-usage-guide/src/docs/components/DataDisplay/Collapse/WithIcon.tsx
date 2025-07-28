import React from 'react';
import { CollapseContainer } from '@ks-console/shared';

export default function WithIcon() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <CollapseContainer 
        title="容器信息"
        icon="🔧"
      >
        <div style={{ padding: '16px' }}>
          <p>容器配置信息</p>
          <p>镜像、端口、资源限制等</p>
        </div>
      </CollapseContainer>
      
      <CollapseContainer 
        title="网络配置"
        icon="🌐"
        defaultOpen={true}
      >
        <div style={{ padding: '16px' }}>
          <p>网络相关配置</p>
          <p>端口映射、服务发现等</p>
        </div>
      </CollapseContainer>
    </div>
  );
} 