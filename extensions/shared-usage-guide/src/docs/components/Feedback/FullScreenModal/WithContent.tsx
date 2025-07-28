import React, { useState } from 'react';
import { FullScreenModal } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithContent() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={() => setVisible(true)}>
        查看详细信息
      </Button>
      
      <FullScreenModal
        visible={visible}
        title="应用详细信息"
        onCancel={() => setVisible(false)}
      >
        <div style={{ padding: '20px' }}>
          <h3>应用配置</h3>
          <p>应用名称: nginx</p>
          <p>版本: v1.0.0</p>
          <p>状态: 运行中</p>
          
          <h3>资源配置</h3>
          <p>CPU: 100m</p>
          <p>内存: 128Mi</p>
          <p>副本数: 3</p>
          
          <h3>网络配置</h3>
          <p>端口: 80</p>
          <p>协议: TCP</p>
        </div>
      </FullScreenModal>
    </div>
  );
} 