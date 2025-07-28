import React, { useState } from 'react';
import { CollapsedBtn } from '@ks-console/shared';

export default function Controlled() {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsedChange = (newCollapsed: boolean) => {
    // 受控模式：可以在这里添加额外的逻辑
    if (newCollapsed) {
      console.log('准备折叠侧边栏');
    } else {
      console.log('准备展开侧边栏');
    }
    setCollapsed(newCollapsed);
  };

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ marginBottom: '16px' }}>
        当前状态: {collapsed ? '折叠' : '展开'}
      </div>
      <CollapsedBtn
        collapsed={collapsed}
        onClickCollapsed={handleCollapsedChange}
      />
      <div style={{ marginTop: '16px', fontSize: '12px', color: '#666' }}>
        受控模式：状态变化会在控制台输出日志
      </div>
    </div>
  );
} 