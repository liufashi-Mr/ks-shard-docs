import React from 'react';
import { CollapseContainer } from '@ks-console/shared';

export default function Basic() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <CollapseContainer title="基本信息">
        <div style={{ padding: '16px' }}>
          <p>这是基本信息的内容</p>
          <p>包含 Pod 的名称、命名空间、状态等信息</p>
        </div>
      </CollapseContainer>

      <CollapseContainer title="配置信息" defaultOpen={true}>
        <div style={{ padding: '16px' }}>
          <p>这是配置信息的内容</p>
          <p>包含镜像、端口、环境变量等配置</p>
        </div>
      </CollapseContainer>
    </div>
  );
}
